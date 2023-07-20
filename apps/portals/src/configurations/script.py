import requests
import json
import re
import os
import sys
from tqdm import tqdm

# Get the portals directory from the args
if len(sys.argv) < 2:
    print("Usage error: Please provide the path to the portal configurations directory as an argument")
    sys.exit(1)
portalsDirectory = sys.argv[1]
ignoreDirectories = ['config-shell', 'style', 'scripts', 'synapseConfigs']

portalDirectory2Project = {}

url = "https://repo-prod.prod.sagebase.org/repo/v1/entity/{id}/path"

headers = {
    "Content-Type": "application/json",
}
pattern = re.compile("syn\d+")
def unique(list):
    unique_list = []
    for x in list:
        if x not in unique_list:
            unique_list.append(x)
    return unique_list
    
def list_subdirectories(directory):
    subdirectories = []
    for root, dirs, files in os.walk(directory):
        for dir in dirs:
            if dir not in ignoreDirectories:
                subdirectories.append(os.path.join(root, dir))
    return subdirectories

def search_files(folder_path):
    matches = []
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if (file.lower().endswith(('ts', 'tsx'))):
                file_path = os.path.join(root, file)
                # print('attempting to read file {file_path}'.format(file_path=file_path))
                with open(file_path, 'r') as f:
                    contents = f.read()
                    file_matches = pattern.findall(contents)
                    matches.extend(file_matches)
    return unique(matches)

def get_projects(entityIds):
    projects = []
    for entityId in entityIds:
        response = requests.request("GET", url.format(id=entityId), headers=headers).json()
        if 'path' in response:
            entityHeaderArray = response['path']
            projects.append(entityHeaderArray[1])
            # print('entityHeaderArray[1]: {entityHeader}'.format(entityHeader=entityHeaderArray[1]))
    return unique(projects)

subdirectories = list_subdirectories(portalsDirectory)

pbar = tqdm(subdirectories)
for subdirectory in pbar:
    subdirectoryTokens = subdirectory.split('/')
    portalName = subdirectoryTokens[len(subdirectoryTokens) - 1]
    status = "processing {portalName}".format(portalName=portalName)
    pbar.set_postfix_str(status)
    entityIds = search_files(subdirectory)
    # print('entityIds from subdirectory {subdirectory}: {entityIds}'.format(subdirectory=subdirectory, entityIds=entityIds))
    projects = get_projects(entityIds)
    # print('projects from subdirectory {subdirectory}: {projects}'.format(subdirectory=subdirectory, projects=projects))
    portalDirectory2Project[portalName] = projects

# print(portalDirectory2Project)

with open('portal2projects.json', 'w') as f:
    json.dump(portalDirectory2Project, f, indent=1)

print('Output saved in portal2projects.json')

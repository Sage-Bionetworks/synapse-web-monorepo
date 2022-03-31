import React, { useEffect, useState } from 'react'
import { FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap'
import { ChangePasswordWithCurrentPassword } from 'synapse-react-client/dist/utils/synapseTypes/ChangePasswordRequests'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { UserProfile } from 'synapse-react-client/dist/utils/synapseTypes'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { SynapseClient } from 'synapse-react-client'

export type ChangePasswordProps = {
    onCancel?: Function
}

export const ChangePassword = (props: ChangePasswordProps) => {
    const { accessToken } = useSynapseContext()
    const [oldPassword, setOldPassword] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [currentUserProfile, setUserProfile] = useState<UserProfile>()

    useEffect(() => {
        async function getUserProfile() {
          const userProfile = await SynapseClient.getUserProfile(accessToken)
          setUserProfile(userProfile)
        }
        if (accessToken) {
          getUserProfile()
        } else {
          setUserProfile(undefined)
        }
      }, [
        accessToken
    ])

    const handleChangePassword = async (clickEvent: React.FormEvent<HTMLElement>) => {
        clickEvent.preventDefault()
        try{
            if(newPassword !== confirmPassword){
                displayToast('New password and confirm password does not match.', 'danger')
            } else if (accessToken){
                const changeRequest: ChangePasswordWithCurrentPassword = {
                    newPassword,
                    concreteType: 'org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword',
                    username: currentUserProfile?.userName!, 
                    currentPassword:oldPassword,
                }
                await SynapseClient.changePasswordWithCurrentPassword(changeRequest, accessToken)
                    .then(() => {
                        displayToast("Successfully changed", 'success')
                        props.onCancel && props.onCancel()
                    })
                    .catch((err: any) => displayToast(err.reason as string, 'danger'))
            }
        } catch(err: any){
            displayToast(err.reason as string, 'danger')
        }
    }

    return (
        <div className='changePassword'>
            <form onSubmit={handleChangePassword}>
                <FormGroup controlId='oldPassword'>
                    <FormLabel>Current Password</FormLabel>
                    <FormControl 
                    type='password' 
                    onChange={e => setOldPassword(e.target.value)} 
                    value = {oldPassword}/>
                </FormGroup>
                <FormGroup controlId='newPassword'>
                    <FormLabel>New Password</FormLabel>
                    <FormControl 
                    type='password' 
                    onChange={e => setNewPassword(e.target.value)} 
                    value = {newPassword}/>
                </FormGroup>
                <FormGroup controlId='confirmPassword'>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl 
                    type='password' 
                    onChange={e => setConfirmPassword(e.target.value)} 
                    value = {confirmPassword}/>
                </FormGroup>
                {props.onCancel && <Button className='btn-container emptyButton' onClick={()=>props.onCancel!()}>
                    Cancel
                </Button>}
                <Button className='btn-container'  variant='secondary' type='submit' onSubmit={handleChangePassword}>Change Password</Button>
            </form>
        </div>
    )
}
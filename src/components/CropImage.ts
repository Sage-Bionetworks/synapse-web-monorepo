import { Area } from 'react-easy-crop/types'

export const createImg = (url: string) => 
    new Promise<HTMLImageElement>((res,rej) => {
        const img = new Image()
        img.addEventListener('load',() => res(img))
        img.addEventListener('error', (err) => rej(err))
        img.setAttribute("crossOrigin", "anonymous")
        img.src = url
    })

export const getCroppedImg = async(imgSrc:string, pixelCrop:Area, rotation=0) => {
    const image = await createImg(imgSrc)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if(!ctx){
        throw new Error('No 2d context')
    }

  const scaleX = image.naturalWidth / image.width
  const scaleY = image.naturalHeight / image.height
  const pixelRatio = 1

  canvas.width = Math.floor(pixelCrop.width * scaleX * pixelRatio)
  canvas.height = Math.floor(pixelCrop.height * scaleY * pixelRatio)

  ctx.scale(pixelRatio, pixelRatio)
  ctx.imageSmoothingQuality = 'high'

  const cropX = pixelCrop.x * scaleX
  const cropY = pixelCrop.y * scaleY

  const centerX = image.naturalWidth / 2
  const centerY = image.naturalHeight / 2

  ctx.save()

  // Move the crop origin to the canvas origin (0,0)
  ctx.translate(-cropX, -cropY)
  // Move the origin to the center of the original position
  ctx.translate(centerX, centerY)

  // Move the center of the image to the origin (0,0)
  ctx.translate(-centerX, -centerY)
  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
  )
  ctx.restore()

    return new Promise((resolve)=>{
        canvas.toBlob((blob) => {
            resolve(new File([blob!], "profilePic.jpg", { type: "image/jpeg" }))
          }, 'image/jpeg')
    })
    
    
    
    
}
import { Area } from 'react-easy-crop'

export const createImg = (url: string) =>
  new Promise<HTMLImageElement>((res, rej) => {
    const img = new Image()
    img.addEventListener('load', () => res(img))
    img.addEventListener('error', err => rej(err.error as Error))
    img.setAttribute('crossOrigin', 'anonymous')
    img.src = url
  })

export const getCroppedImg = async (
  imageSrc: string,
  pixelCrop: Area,
  outputWidth: number,
  outputHeight: number,
) => {
  const image = await createImg(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = outputWidth
  canvas.height = outputHeight
  if (!ctx) {
    throw new Error('No 2d context')
  }
  // Draw the image on the canvas
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    outputWidth,
    outputHeight,
  )

  return new Promise<File>((resolve, reject) => {
    canvas.toBlob(file => {
      if (!file) {
        reject(new Error('Canvas is empty'))
        return
      }
      resolve(new File([file], 'profilePic.jpg', { type: 'image/jpeg' }))
    }, 'image/jpeg')
  })
}

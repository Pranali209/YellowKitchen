import React from 'react'
import image1 from '../../assets/Rectangle10.png'
import image2 from '../../assets/Rectangle11.png'
import image3 from '../../assets/Rectangle12.png'
import image4 from '../../assets/Rectangle13.png'
function FollowSection() {
    const images = [
        { id: 1, src: image1 },
        { id: 2, src: image2 },
        { id: 3, src: image3 },
        { id: 4, src: image4 },
    ]
    return (
        <div className='p-16 max-md:p-6'>
            <h1 className='text-xl text-primary'> <b>#YELLOWKITCHEN</b> in Instagram</h1>
            <div className='flex max-md: flex-wrap justify-between mt-6'>
                {
                    images.map((image, index) => {
                        return (
                            <div key={index} className='rounded-md max-md:m-5'>
                                <img src={image.src} alt="image" className='rounded-md' />
                                </div>
                               )
                               })

                }
            </div>

        </div>
    )
}

export default FollowSection
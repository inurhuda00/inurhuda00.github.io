import Image from 'next/image'

const Instagram = () => {
    return (
        <Image
            alt="Mountains"
            src="/static/images/hello.png"
            layout="fill"
            objectFit="cover"
            quality={100}
        />
    )
}

export default Instagram

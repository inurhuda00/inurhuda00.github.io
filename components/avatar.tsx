import Link from 'next/link'

type Props = {
    name: string
    picture: string
    blog?: boolean
}

const Avatar = ({ name, picture, blog = false }: Props) => {
    return (
        <div className="flex items-center">
            <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
            <span>
                {blog && <p className="text-xs text-gray-600">written by</p>}
                <Link href="/profile">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl font-semibold hover:underline"
                    >
                        {name}
                    </a>
                </Link>
            </span>
        </div>
    )
}

export default Avatar

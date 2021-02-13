import Avatar from './avatar'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import PostType from 'types/post'

interface Props
    extends Pick<PostType, 'title' | 'image' | 'author' | 'readingTime' | 'created_at'> {}

const PostHeader = ({ title, image, author, readingTime, created_at }: Props) => {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="hidden md:block md:mb-12">
                <Avatar
                    name={author.name}
                    picture={author.picture}
                    read={readingTime.text}
                    date={created_at}
                />
            </div>
            <div className="mb-8 md:mb-16 sm:mx-0">
                <CoverImage title={title} src={image} />
            </div>

            <div className="max-w-2xl mx-auto">
                <div className="block md:hidden mb-6">
                    <Avatar
                        name={author.name}
                        picture={author.picture}
                        read={readingTime.text}
                        date={created_at}
                    />
                </div>
            </div>
        </>
    )
}

export default PostHeader

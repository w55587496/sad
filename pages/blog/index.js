import { createClient } from 'contentful'
import BlogCard from '/component/blogCard'


export async function getStaticProps() {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({content_type: 'blog'})
  
  return {
    props: {
      blogs: res.items,
    } 
  }

}
export default function BlogHome(props) {

  // console.log("space:", process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
  // console.log("accessToken:", process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY)
  console.log(props);

  return (
    <>
    {/*  className = {globalStyle.container} */}
      <div>
        <h1>
          Welcome to BlogHomePage!
        </h1>
        <div className = "blog_list">
          {props.blogs.map(blog =>(
            <BlogCard key = {blog.sys.id} blog ={blog}/>
          ))}
      </div>
    </div>

    {/* <style JSX>{`
      .blog_list{
        display:grid;
        grid-template-column: 1fr 1fr;
        grid-gap: 20px 60px;
      }`
    }
    </style> */}
    </>
  )
}

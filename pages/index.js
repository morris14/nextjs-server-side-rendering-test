import Layout from "../components/MyLayout";
import Link from "next/link";

const PostLink = props => (
    <li>
        <Link href='/p/[id]' as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

const Blog = () => (
    <Layout>
        <h1>My blog</h1>
        <ul>
            <PostLink id='hello-nextjs' />
            <PostLink id='learn-nextjs' />
            <PostLink id='deploy-nextjs' />
        </ul>
    </Layout>
);

export default Blog;

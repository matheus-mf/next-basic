import {GetStaticPaths, GetStaticProps} from "next";

export default function BlogPost({date}) {
    return (<h1>{date}</h1>)
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [], // lista de item que vale a pena ser "cacheado" durando o build
        fallback: false
    }
}

export const getStaticProps: GetStaticProps =  async () => {
    return {
        props: {
            date: new Date().toISOString(),
        },
        revalidate: 5,
    }

}
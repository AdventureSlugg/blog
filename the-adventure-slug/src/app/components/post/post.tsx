import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default async function Post() {
	const { content } = matter('# H1')

	return (
		<ReactMarkdown>
			{ content }
		</ReactMarkdown>
		
	)
}
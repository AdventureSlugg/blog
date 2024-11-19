import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { remark } from "remark";
import html from 'remark-html';

export default async function Post() {
	const { content } = matter('# H1')

	return (
		<ReactMarkdown>
			{ content }
		</ReactMarkdown>
		
	)
}
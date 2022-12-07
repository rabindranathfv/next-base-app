// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MockComments } from "../../../data-mock/data-mock";

type Comment = {
  id: Number;
  text: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Comment> | Comment>
) {
  if (req.method === "GET") {
    return res.status(200).json(MockComments);
  } else if (req.method === "POST") {
    const bodyComment = req.body.comment;
    const newComment = { id: Date.now(), text: bodyComment };
    MockComments.push(newComment);
    return res.status(200).json(newComment);
  }
}

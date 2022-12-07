// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MockComments } from "../../../data-mock/data-mock";

type Comment = {
  id: Number;
  text: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comment | undefined>
) {
  if (req.method === "GET") {
    const { commentId } = req.query;
    const findComment = MockComments.find((c) => c.id.toString() === commentId);
    return res.status(200).json(findComment);
  } else if (req.method === "DELETE") {
    const { commentId } = req.query;
    const deleteComment = MockComments.find(
      (c) => c.id.toString() === commentId
    );
    const indexComment = MockComments.findIndex(
      (c) => c.id.toString() === commentId
    );
    MockComments.splice(indexComment, 1);
    return res.status(201).json(deleteComment);
  }
}

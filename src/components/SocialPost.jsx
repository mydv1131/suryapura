import React from 'react';
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

const SocialPost = ({ author, time, content, image, likes, comments }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 transition-transform hover:scale-[1.02]">
    <div className="p-4 flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-600 font-bold">
        {author.charAt(0)}
      </div>
      <div>
        <h4 className="font-semibold text-slate-800">{author}</h4>
        <p className="text-xs text-slate-500">{time}</p>
      </div>
    </div>
    <p className="px-4 pb-3 text-slate-700 text-sm leading-relaxed">{content}</p>
    <img src={image} alt="Post Update" className="w-full h-48 object-cover" />
    <div className="p-4 border-t border-slate-50 flex justify-between text-slate-500 text-sm">
      <button className="flex items-center space-x-1 hover:text-indiaGreen-600 transition-colors"><ThumbsUp className="w-4 h-4"/> <span>{likes}</span></button>
      <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors"><MessageCircle className="w-4 h-4"/> <span>{comments}</span></button>
      <button className="flex items-center space-x-1 hover:text-indigo-600 transition-colors"><Share2 className="w-4 h-4"/> <span>Share</span></button>
    </div>
  </div>
);

export default SocialPost;

import { jsPDF } from "jspdf";
import React, { useRef } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogs = useLoaderData();
  const pdfRef = useRef(null);

  const handleDownload = async () => {
    const content = pdfRef.current;

    const doc = new jsPDF();
    content.style.backgroundColor = "#4E2A00";
    await doc.html(content, {
      callback: (doc) => {
        doc.save("blog - Showkat.pdf");
      },
      width: 210, // <- here
      windowWidth: window.innerWidth, // <- here,
    });
    content.style.backgroundColor = "transparent";
  };

  return (
    <div ref={pdfRef} className="container mx-auto px-4 sm:px-8 lg:px-16 py-24">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-playfair text-white mb-8">Recent Blogs</h1>
        <button
          onClick={handleDownload}
          className="btn text-accent normal-case btn-ghost"
        >
          <span className="hidden sm:inline">Download Pdf </span>
          <HiOutlineDownload className="text-xl text-primary sm:ml-3" />
        </button>
      </div>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h2 className="text-2xl font-semibold mb-2">
              {blog.id}. {blog.question}
            </h2>
            <p
              className="text-secondary/90"
              dangerouslySetInnerHTML={{
                __html: blog.answer.replace(/\n/g, "<br>"),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

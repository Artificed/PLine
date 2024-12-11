const ChatSearch: React.FC = () => {
  return (
    <div className="flex items-center mt-4 ml-3 mb-1 gap-3">
      <div className="flex mb-1 px-2 py-2 w-5/6 rounded-md items-center gap-2 bg-white bg-opacity-15">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="gray"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          className="bg-transparent text-white w-full focus:outline-none text-xs"
          placeholder="Search for chats and messages"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="size-5"
      >
        <path
          fillRule="evenodd"
          d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5Zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default ChatSearch;

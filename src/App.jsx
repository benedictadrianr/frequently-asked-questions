import { useState } from "react";
import down from "./down.png";

const faqList = [
  {
    id: 1,
    qName: "Question 1",
    qAnswer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In sequi harum aspernatur.",
  },
  {
    id: 2,
    qName: "Question 2",
    qAnswer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam nostrum voluptas dicta adipisci non cumque consequuntur eveniet aliquam eum!",
  },
  {
    id: 3,
    qName: "Question 3",
    qAnswer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste dignissimos deleniti natus architecto, eum veritatis quia, laboriosam vel, eligendi quod nam perspiciatis. Ipsam, magnam.",
  },
  {
    id: 4,
    qName: "Question 4",
    qAnswer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore cumque consequatur autem molestias illo facere laboriosam vero a unde iusto aliquam, voluptatibus accusamus sequi fugiat facilis temporibus suscipit voluptates!",
  },
];

export default function App() {
  const [drop, setDrop] = useState(null);

  const toggle = (i) => {
    if (drop == i) {
      return setDrop(null);
    }

    setDrop(i);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="mb-8 text-3xl">FAQ</h1>
      <ul className="w-[80%] h-[80%]">
        {faqList.map((list, i) => (
          <li
            key={list.id}
            className="w-full  min-h-[10%] flex flex-col text-white font-semibold mb-2 last:mb-0"
          >
            <div
              className="w-full h-[70px] bg-gray-600 flex justify-between px-8 items-center cursor-pointer rounded-tr-md rounded-tl-md"
              onClick={() => toggle(i)}
            >
              <p>{list.qName}</p>
              <span>
                <img
                  className={`h-6 transition-all ease-in-out ${
                    drop == i ? "rotate-180" : ""
                  }`}
                  src={down}
                  alt=""
                />
              </span>
            </div>
            <div
              className={`w-full bg-gray-400 justify-start items-center px-8 transition-all ease-in-out overflow-hidden rounded-bl-md rounded-br-md ${
                drop == i ? "max-h-[2000px] py-6" : "max-h-0 py-0"
              }`}
            >
              <p>{list.qAnswer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

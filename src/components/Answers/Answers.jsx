import React from "react";

const Answers = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-xl m-5 underline">
        Question & Answer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h4 className="font-bold">1. What is the difference between props and state?</h4>
          <p><strong>Answer:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non dolores tempora optio. Laudantium ducimus ea, aperiam laborum itaque mollitia!</p>
        </div>
        <div>
          <h4 className="font-bold">2. How does useState work?</h4>
          <p><strong>Answer:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non dolores tempora optio. Laudantium ducimus ea, aperiam laborum itaque mollitia!</p>
        </div>
        <div>
          <h4 className="font-bold">3. What is the purpose of using useEffect without load data?</h4>
          <p><strong>Answer:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non dolores tempora optio. Laudantium ducimus ea, aperiam laborum itaque mollitia!</p>
        </div>
        <div>
          <h4 className="font-bold">4. How does react work?</h4>
          <p><strong>Answer:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non dolores tempora optio. Laudantium ducimus ea, aperiam laborum itaque mollitia!</p>
        </div>
      </div>
    </div>
  );
};

export default Answers;

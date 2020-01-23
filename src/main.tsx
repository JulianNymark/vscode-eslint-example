import { thingWithChildren } from "./thing";

const aComponent = () => {
  return (
    <div>
      <thingWithChildren>
        <p>text</p>
      </thingWithChildren>
      <thingWithChildren>
        <p>text</p>
      </thingWithChildren>
      <thingWithChildren>
        <button>text</button>
      </thingWithChildren>
    </div>
  );
};

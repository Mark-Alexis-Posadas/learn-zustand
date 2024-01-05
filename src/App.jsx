import Alert from "./components/Alert/Alert";
import useButtonStore from "./store/ButtonContex";

const App = () => {
  return (
    <>
      <div className="container mx-auto mt-10">
        <Alert
          borderColor="border-red-300"
          backgroundColor="bg-red-50"
          textTitle="Alert Title"
          textDescription="Duis eget leo nulla. Aliquam hendrerit ex ac est congue, at tincidunt nisl vehicula. In hac habitasse platea dictumst. Mauris non iaculis purus. Nulla quis risus eget urna consectetur malesuada."
          textColor="text-red-500"
          buttonColor="red"
        />

        <Alert
          borderColor="border-green-300"
          backgroundColor="bg-green-50"
          textTitle="Alert Title"
          textDescription="Duis eget leo nulla. Aliquam hendrerit ex ac est congue, at tincidunt nisl vehicula. In hac habitasse platea dictumst. Mauris non iaculis purus. Nulla quis risus eget urna consectetur malesuada."
          textColor="text-green-500"
          buttonColor="green" // specify the button color for this Alert
        />
      </div>
    </>
  );
};

export default App;

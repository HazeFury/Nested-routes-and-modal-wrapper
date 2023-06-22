# Nested routes & react modal wrapper

# Concept

This workshop shows how nested routes works. I also created my own concept of modal wrapper for React and I share it with you ! 

# Wrapper Modal
## Setup & Use

If you want to customize everything by yourself, you can copy/paste the code from /ModalWrapper folder or you can download it and put it in your project folder. I recommand to place it close to your root folder because it is meant to be used anywhere in your project and not only in one page.

## Import

Start to import the component from the folder in the page in which you want tu use the modal. Don't forget to import useState too.

```
import { useState } from "react";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import BasicModal from "../../ModalWrapper/BasicModal";
```

## How it works
- You must start by create a state initilized to false. In the this example, I create a state named openModal.

```
const [openModal, setOpenModal] = useState(false);
```

- Then you need to call the component **`ModalWrapper`**. This is the one that create the blur/shadow in the background and an empty div at the center of your screen. It's fully responsive and ready to welcome any of your children component. This is why modal wrapper are so useful. Because you can call them anywhere in your app with a few ligns of code !
So, here is the idea:

```
<ModalWrapper >
            <Chidren/>
</ModalWrapper>
```

- The *`Chidren`* depends on you. You can use by default the **`BasicModal`** component (just a yes/no button and some text) or you can create your own one.
 Let's use the **`BasicModal`** component :

 ```
<ModalWrapper >
            <BasicModal />
</ModalWrapper>
```
## Props
- The last thing you should understand is the use of props to make your modal works well.
If you are using the BasicModal component, you should have at least 2 Props in your component : 1 for closing your modal in ModalWrapper component and 1 in the BasicModal.
You can add a few more props, here is the complete list :

### in ModalWrapper

- **closeModal** : (_Hook_) is needed to close the modal. You just have to give the value to change the state of your useState (the state that open your modal)
- **isCloseBtn** : (_boolean_) is needed to select if you want the close button on the top-right corner of the modal. set to true or false according to your needs.

### in BasicModal

- **closeModal** : (_Hook_) is needed to close the modal. You just have to give the value to change the state of your useState (the same you passed in ModalWrapper)
- **modalText** : (_string_) whrite the message you want to see appear in your modal
- **actionNoButton** : (_function_) give the function that you want to execute when clicking on the "no" button. If you don't have any function to give, you can give an empty function or remove the props if you are sure, you will never use it in your project.
- **actionYesButton** : (_function_) give the function that you want to execute when clicking on the "yes" button. If you don't have any function to give, you can give an empty function or remove the props if you are sure, you will never use it in your project.

So, it should look like this :
```
<ModalWrapper closeModal={setOpenMyModal} isCloseBtn>
            <BasicModal
              closeModal={setOpenMyModal}
              actionNoButton={emptyFunction}
              actionYesButton={myFunction}
            />
          </ModalWrapper>
```

- Finally, don't forget that you need to render your modal only when you click on a button or whatever.
So, you may use the logical AND (&&) to make this works.

```
{openMyModal && (
          <ModalWrapper closeModal={setOpenMyModal} isCloseBtn>
            <BasicModal
              closeModal={setOpenMyModal}
              actionNoButton={emptyFunction}
              actionYesButton={myFunction}
            />
          </ModalWrapper>
        )}
```

_NB : `You can place the ModalWrapper anywhere you want in you XML. Thanks to the CSS properties, it will always fits well in your project.`_

_`In terms of index, the modal will be above all your elements but if you want some of your components (Navbar or header for example) to not being hidden by the blur effect, you should give them a z-index > 10 in yout CSS properties `_


# Result
## This is what you should have at the end :

```
import { useState } from "react";
import "../../App.css";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import BasicModal from "../../ModalWrapper/BasicModal";

export default function Item2() {
  const [openMyModal, setOpenMyModal] = useState(false);

  const handleOpen = () => {
    setOpenMyModal(true);
  };

  const emptyFunction = () => {};

  const myFunction = () => {
    console.info("this is modal wrapper");
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open modal
      </button>
      {openMyModal && (
        <ModalWrapper closeModal={setOpenMyModal} isCloseBtn>
          <BasicModal
            closeModal={setOpenMyModal}
            actionNoButton={emptyFunction}
            actionYesButton={myFunction}
          />
        </ModalWrapper>
      )}
    </div>
  );
}


```

## `Enjoy =)`
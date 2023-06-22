# Nested routes & react modal wrapper

# Concept

This workshop shows how nested routes works. I also created my own concept of modal wrapper for React ! 

# Wrapper Modal
## Setup & Use

If you want to customize everything by yourself, you can copy/paste the code from /ModalWrapper folder or you can download it and put it in your project folder. I recommand to place it close to your root folder because it is meant to be used anywhere in your project and not only in one page.

## Import

Start to import the component from the folder. For example :

```
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
### Props
- The last thing you should understand is the use of props to make your modal works well.
If you are using the BasicModal component, you should have at least 3 Props in your component : 2 for closing your modal and 1 to execute an action (when you click on "Yes" button) :

```
<ModalWrapper closeModal={setOpenModal}>
            <BasicModal closeModal={setOpenModal} actionButton={myAction} />
</ModalWrapper>
```

- Finally, don't forget that you need to render your modal only when you click on a button or whatever.
So, you may use the logical AND (&&) to make this works.

```
{openModal && (
          <ModalWrapper closeModal={setOpenModal}>
            <BasicModal closeModal={setOpenModal} actionButton={myAction} />
          </ModalWrapper>
        )}
```

_NB : `You can place the ModalWrapper anywhere you want in you XML. Thanks to the CSS properties, it does not matter.`_

_`The modal will be above all your elements but if you want some of your components (Navbar or header for example) to not being hidden by the blur effect, you should give them a z-index > 10 in yout CSS properties `_


# Result
## This is what you should have at the end :

```
import { useState } from "react";
import "../../App.css";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import BasicModal from "../../ModalWrapper/BasicModal";

export default function Item4() {
  const [openModal, setOpenModal] = useState(false);

  const handleToggle = () => {
    setOpenModal(!openModal);
  };

  const myAction = () => {
    console.info("toto");
  };
  return (
    <div className="item-class">
      <div className="this-page fourth-item-page">
        <h1>Item 4</h1>
        <button type="button" className="btn-open-modal" onClick={handleToggle}>
          Open modal
        </button>
        {openModal && (
          <ModalWrapper closeModal={setOpenModal}>
            <BasicModal closeModal={setOpenModal} actionButton={myAction} />
          </ModalWrapper>
        )}
      </div>
    </div>
  );
}

```
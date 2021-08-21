//Arrow function  does no thave its own execution context

const myObj1 = {
    myMethod(args) {
        console.log(this);

        const callBack = () => {
            console.log(this);
        }

        args.forEach(callBack);
    }

}

myObj1.myMethod([1,2,3])
const display = function (name) {
    console.log('Hello',name);
};
const disp = function (name) {
    console.log('Hello', arguments[0]);
    console.log('Hello', arguments[1]);

};
display('Mohd','Zaki');
disp('Mohd','Zaki')
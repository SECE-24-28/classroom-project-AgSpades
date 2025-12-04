let student ={
  name:"John",
  class:"12",
  introduce:function() {
    console.log("Hello, I am "+this.name);
  }
}
student.introduce();

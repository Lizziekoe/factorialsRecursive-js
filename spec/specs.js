describe("factorial", function(){
  it("will return 1 when input is 1",function(){
    expect(factorial(1)).to.equal(1);
  });

  it("will return 2 when input is 2",function(){
    expect(factorial(2)).to.equal(2);
  });

  it("will return 6 when input is 3",function(){
    expect(factorial(3)).to.equal(6);
  });


});

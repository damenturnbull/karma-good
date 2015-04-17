describe("A JavaScript Application", function() {

  it("contains a spec with a boolean expectation", function() {
    expect(true).toBe(true);
  });

  it("uses the 'toBeDefined' matcher to compare against `undefined`", function() {
    var a = { foo: "foo" };
    expect(a.foo).toBeDefined();
    expect(a.bar).not.toBeDefined();
  });  

  describe("Checks for file inclusion", function() {

    var cat = new Cat();
    it("the cat is defined", function() {
      expect(cat.talk()).toBeDefined();
    });

    it("the cat talks", function() {
      expect(cat.talk()).toBeDefined();
      expect(cat.talk()).toEqual("Meow");
    });
  });

});
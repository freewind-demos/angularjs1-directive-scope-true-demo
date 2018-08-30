AngularJS1 Directive Scope True Demo
====================================

```
scope: true
```

有点像子类的继承：
在directive中的修改就像是子类不会修改父类的定义，而是新增一个方法覆盖父类；
如果只是读取，则直接引用父类中的方法。

```
npm install
open index.html
```

![demo](./images/demo.jpg)

Resources
---------

- AngularJS1: <https://angularjs.org/>
- directive scope api: <https://docs.angularjs.org/api/ng/service/$compile#-scope->
- $element api: <https://docs.angularjs.org/api/ng/function/angular.element#angularjs-s-jqlite>
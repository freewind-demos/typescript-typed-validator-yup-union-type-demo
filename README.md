TypeScript Typed Validator Yup Union Type Demo
===========================

似乎在yup中没有办法表现union type，类似于：

```
type User = {
    username: string | number
}
```

看issues里的讨论，zod就是为了解决这个问题而出现的：
https://github.com/jquense/yup/issues/593#issuecomment-605717756

```
npm install
npm run demo
```

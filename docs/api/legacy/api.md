# API

## getContext: `function(): android.context.Context`

MainActivity의 Context를 반환합니다.

### example

```javascript
App.getContext(); // -> MainActivity Context

// but you can use this way

App.context;
```

## UIThread: `function(func: () => void, onComplete?: (err: Error, result: unknown) => void): void`

UI 쓰레드에서 `func`함수를 실행합니다.
onComplete함수는 error, result의 인자를 가지며, func실행 후 에러 발생시 error에 에러객체가 전달되고,
성공적으로 실행됐을 시 반환값을 result에 전달합니다.

```javascript
Api.UIThread(() => {
    // Put what you want in the UI thread
}, (err, result) => {
    // onComplete
})
```
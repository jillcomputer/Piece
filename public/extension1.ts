// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

const cats = {
    'one': 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
    'two': 'https://source.unsplash.com/random'
};

// // 插件激活
export function activate(context: vscode.ExtensionContext) {

    // 注册 extension.helloWorld 命令
    const disposable = vscode.commands.registerCommand("extension.helloWorld", () => {
        vscode.window.showInformationMessage("Hello World!123");
    });
    // 给插件订阅 helloWorld 命令
    context.subscriptions.push(disposable);
    // 新增的代码
    const helloVscode = vscode.commands.registerCommand("extension.helloVscode", () => {
        vscode.window.showInformationMessage("Hello Vscode");
    });
    context.subscriptions.push(helloVscode);

    let currentPanel: vscode.WebviewPanel | undefined = undefined;


    // 编写一个新命令进行通信
    context.subscriptions.push(
        vscode.commands.registerCommand('catCoding.start', () => {
            // 创建并显示一个新的webview
            if (currentPanel) {
                //显示一个目标面板
                currentPanel.reveal(vscode.ViewColumn.One);
            } else {
                currentPanel = vscode.window.createWebviewPanel(
                    'catCoding',// 标识webview的类型。在内部使用
                    '风一样的男子123',// 显示给用户的面板的标题
                    vscode.ViewColumn.One,// 在编辑器列中显示新的webview面板
                    {
                        // 添加js
                        enableScripts: true,
                        retainContextWhenHidden: true
                    }
                );
            }
            currentPanel.webview.html = getWebViewOne('two');
            //当页面销毁时候
            currentPanel.onDidDispose(
                () => {
                    currentPanel = undefined;
                },
                undefined,
                context.subscriptions
            );
            // // 你可以发送任何JSON序列化数据。
            // panel.webview.postMessage({command: '我是传递过来的数据'});
        })
    );
    //新命令
    context.subscriptions.push(
        vscode.commands.registerCommand('catCoding.start12', () => {
            if (!currentPanel) {
                return;
            }

            // 传递的数据
            currentPanel.webview.postMessage({ command: '数据传进来啦' });
        })
    );
    // context.subscriptions.push(
    //     vscode.commands.registerCommand('catCoding.start', () => {
    //
    //         panel.webview.html = getWebView('one');
    //         // 根据视图状态更改更新内容
    //         panel.onDidChangeViewState(e => {
    //             const panel = e.webviewPanel;
    //             if (panel.viewColumn) {
    //                 // 拖拽第一个页面
    //                 if (panel.viewColumn === vscode.ViewColumn.One) {
    //                     updateWeb(panel, 'one');
    //                     // 拖拽第二个页面
    //                 } else if (panel.viewColumn === vscode.ViewColumn.Two) {
    //                     updateWeb(panel, 'two');
    //                 }
    //             }
    //         });
    // let iteration = 0;
    // const updateWebview = () => {
    //     const cat = iteration++ % 2 ? 'one' : 'two';
    //     // vscode头文件
    //     panel.title = cat;
    //     panel.webview.html = getWebView(cat);
    // };
    // // 初始化的状态
    // updateWebview();
    // // 每2s重新加载一次html,这样肯定不行
    // const interval1 = setInterval(updateWebview, 2000);
    // panel.onDidDispose(()=>{
    //     // 当面板关闭时，取消对webview内容的任何更新
    //     // setTimeout 也一样, 这样控制台就不会报错啦
    //     clearInterval(interval1);
    // },
    //     null,
    //     context.subscriptions);
    // 设置其HTML内容
    // panel.webview.html = getWebView();
    // })
    // );


    // return 的内容可以作为这个插件对外的接口
    return {
        hello() {
            return "hello world123";
        }
    };
}
function getWebViewOne(cat: keyof typeof cats) {
    return `<!doctype html><html lang=""><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="http://localhost:3000/public/dist/favicon.ico"><title>my-vue-1</title><style></style><script defer="defer" src="http://localhost:3000/public/dist/js/chunk-vendors.151a1f63.js"></script><script defer="defer" src="http://localhost:3000/public/dist/js/app.4ff7fbb0.js"></script><link href="http://localhost:3000/public/dist/css/app.0bfcf4c3.css" rel="stylesheet"></head><body><noscript><strong>We're sorry but my-vue-1 doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript><div id="app"></div></body></html>`;
}
// function updateWeb(panel: vscode.WebviewPanel, catName: keyof typeof cats) {
//     panel.title = catName;
//     panel.webview.html = getWebView(catName);
// }

// function getWebView(cat: keyof typeof cats) {
//     return `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Cat Coding</title>
//     <style>
//     h1{
//     background-color: red;
//     }
// </style>
// </head>
// <body>
//     <h1>我是一行文字</h1>
//     <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
//     <img src="${cats[cat]}" width="300" />
//     <div id="aaa">0</div>
//     <div id="bbb">100</div>
//     <h1 id="ccc">默认的</h1>
//     <button onclick="clickMethod()">修改</button>
//     <script >
//     let a=document.querySelector('#aaa')
//     let c=document.querySelector('#ccc')
//     let num=0;
//       // 消息传输
//    const vscode = acquireVsCodeApi();
//    function clickMethod(){
//        // 这个好像改不了, 暂时不知道什么原因
//                 vscode.postMessage({ command: 'get-data' });
//                   // 这个好像是数据传递
//          console.log('数据已经加载了');
//
//    }
//     setInterval(()=>{
//         ++num;
//         a.textContent=num;
//
//     },2000)
//     console.log(111);
//     window.addEventListener('message',event=>{
//         // 拿到数据
//         const message=event.data;
//         if(message.command){
//             c.textContent=message.command
//         }
//     })
//
//
//
// // vscode.window.showInformationMessage("我是传递过来的提醒");
//      console.log(vscode);
// </script>
// <script src="http://localhost:3000/public/test3.js"></script>
// </body>
// </html>`;
// }

// // 插件释放的时候触发
export function deactivate() {
}
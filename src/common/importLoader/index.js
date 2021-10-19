export default class ImportLoader {
    /**
     * 初始化 ImportLoader
     * @param url 要引入的外部js文件
     * @param id 脚本ID，防止重复加载
     * @param protocol 缓存的数据
     */
    constructor( url, id = '', protocol) {
        this.id = id;
        this.url = url;
        if (this.url.indexOf('//') === 0) {
            this.protocol = protocol || window.location.protocol;
            if (this.protocol.indexOf(':') === -1) {
                this.protocol += ':';
            }
        }
    }

    buildScriptTag(src, id) {
        if (document) {
            const script = document.createElement('script');
            if (id) script.id = id;
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = src;
            return script;
        }
        return undefined;
    }

    getScriptPromise(src, id) {
        const script = this.buildScriptTag(src, id);
        if (script) {
            const p = new Promise((resolve, reject) => {
                script.onload = function () {
                    // console.log('getScriptPromise', arguments);
                    resolve(this);
                };
                script.onerror = function () {
                    reject(this);
                };
            });
            const apps = document.querySelector('#app')
            apps.appendChild(script);
            return p;
        }

    }

    getMainPromise() {
        return this.getScriptPromise(`${this.protocol}${this.url}`, this.id);
    }

    /** 加载外部js文件 */
    async load() {
        if (typeof window === 'undefined') {
            return null;
        }
        if (document && document.getElementById(this.id)) return null;
        return this.getMainPromise();
    }
}

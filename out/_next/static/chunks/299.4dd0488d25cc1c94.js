"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[299],{53299:function(t,e,n){n.r(e),n.d(e,{WalletConnectV1Adapter:function(){return Z}});var r=n(4942),o=n(75426),i=n(74131);class a extends o.Z{constructor(t,e){super({cryptoLib:i,connectorOpts:t,pushServerOpts:e})}}var c=a,s=(n(88473),n(15048),n(17187));n(4445),n(79826),n(12840),n(30778),n(74286);function l(t,e,n){try{Reflect.apply(t,e,n)}catch(r){setTimeout((()=>{throw r}))}}class h extends s.EventEmitter{emit(t){let e="error"===t;const n=this._events;if(void 0!==n)e=e&&void 0===n.error;else if(!e)return!1;for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];if(e){let t;if(o.length>0&&([t]=o),t instanceof Error)throw t;const e=new Error("Unhandled error.".concat(t?" (".concat(t.message,")"):""));throw e.context=t,e}const a=n[t];if(void 0===a)return!1;if("function"===typeof a)l(a,this,o);else{const t=a.length,e=function(t){const e=t.length,n=new Array(e);for(let r=0;r<e;r+=1)n[r]=t[r];return n}(a);for(let n=0;n<t;n+=1)l(e[n],this,o)}return!0}}Error;Symbol("IGNORE_SUBSTREAM");var d=n(13631),p=n(2043),u=n.n(p);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const g={EIP155:"eip155",SOLANA:"solana"},E=f(f({},g),{},{MULTICHAIN:"multichain"}),y="776218ac4734478c90191dde8cae483c",O=(t,e)=>{const n=e?"number"===typeof e?e:parseInt(e,16):(t=>{if(t===g.EIP155)return 1;if(t===g.SOLANA)return 1;throw new Error("Chain namespace ".concat(t," is not supported"))})(t);return t===g.EIP155?(t=>{const e=g.EIP155;return 1===t?{chainNamespace:e,chainId:"0x1",rpcTarget:"https://mainnet.infura.io/v3/".concat(y),displayName:"Ethereum Mainnet",blockExplorer:"https://etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:3===t?{chainNamespace:e,chainId:"0x3",rpcTarget:"https://ropsten.infura.io/v3/".concat(y),displayName:"ropsten",blockExplorer:"https://ropsten.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:4===t?{chainNamespace:e,chainId:"0x4",rpcTarget:"https://rinkeby.infura.io/v3/".concat(y),displayName:"rinkeby",blockExplorer:"https://rinkeby.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:5===t?{chainNamespace:e,chainId:"0x5",rpcTarget:"https://goerli.infura.io/v3/".concat(y),displayName:"goerli",blockExplorer:"https://goerli.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:42===t?{chainNamespace:e,chainId:"0x2a",rpcTarget:"https://kovan.infura.io/v3/".concat(y),displayName:"kovan",blockExplorer:"https://kovan.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:137===t?{chainNamespace:e,rpcTarget:"https://polygon-rpc.com",blockExplorer:"https://polygonscan.com",chainId:"0x89",displayName:"Polygon Mainnet",ticker:"matic",tickerName:"matic"}:80001===t?{chainNamespace:e,rpcTarget:"https://rpc-mumbai.maticvigil.com",blockExplorer:"https://mumbai-explorer.matic.today",chainId:"0x13881",displayName:"Polygon Mumbai Testnet",ticker:"matic",tickerName:"matic"}:56===t?{chainNamespace:e,rpcTarget:"https://bsc-dataseed.binance.org",blockExplorer:"https://bscscan.com",chainId:"0x38",displayName:"Binance SmartChain Mainnet",ticker:"BNB",tickerName:"BNB"}:97===t?{chainNamespace:e,rpcTarget:"https://data-seed-prebsc-2-s3.binance.org:8545",blockExplorer:"https://testnet.bscscan.com",chainId:"0x61",displayName:"Binance SmartChain Testnet",ticker:"BNB",tickerName:"BNB"}:null})(n):t===g.SOLANA?(t=>{const e=g.SOLANA;return 1===t?{chainNamespace:e,blockExplorer:"https://explorer.solana.com",chainId:"0x1",displayName:"Solana Mainnet",rpcTarget:"https://api.mainnet-beta.solana.com",ticker:"SOL",tickerName:"Solana Token"}:2===t?{rpcTarget:"https://api.testnet.solana.com",blockExplorer:"https://explorer.solana.com?cluster=testnet",chainId:"0x2",chainNamespace:e,displayName:"testnet",ticker:"SOL",tickerName:"solana"}:3===t?{rpcTarget:"https://api.devnet.solana.com",blockExplorer:"https://explorer.solana.com?cluster=devnet",chainId:"0x3",chainNamespace:e,displayName:"devnet",ticker:"SOL",tickerName:"solana"}:null})(n):null};class N extends d.s{constructor(t,e){super(e),(0,r.Z)(this,"code",void 0),(0,r.Z)(this,"message",void 0),this.code=t,this.message=e||"",Object.defineProperty(this,"name",{value:"Web3AuthError"})}toJSON(){return{name:this.name,code:this.code,message:this.message}}toString(){return JSON.stringify(this.toJSON())}}class v extends N{constructor(t,e){super(t,e),Object.defineProperty(this,"name",{value:"WalletInitializationError"})}static fromCode(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new v(t,"".concat(v.messages[t],", ").concat(e))}static notFound(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.fromCode(5001,t)}static notInstalled(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.fromCode(5002,t)}static notReady(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.fromCode(5003,t)}static windowBlocked(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.fromCode(5004,t)}static windowClosed(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.fromCode(5005,t)}static incompatibleChainNameSpace(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.fromCode(5006,t)}static duplicateAdapterError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.fromCode(5007,t)}static invalidProviderConfigError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.fromCode(5008,t)}static providerNotReadyError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.fromCode(5009,t)}static rpcConnectionError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.fromCode(5010,t)}static invalidParams(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.fromCode(5011,t)}static invalidNetwork(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.fromCode(5013,t)}}(0,r.Z)(v,"messages",{5e3:"Custom",5001:"Wallet is not found",5002:"Wallet is not installed",5003:"Wallet is not ready yet",5004:"Wallet window is blocked",5005:"Wallet window has been closed by the user",5006:"Incompatible chain namespace provided",5007:"Adapter has already been included",5008:"Invalid provider Config",5009:"Provider is not ready yet",5010:"Failed to connect with rpc url",5011:"Invalid params passed in",5013:"Invalid network provided"});class C extends N{constructor(t,e){super(t,e),Object.defineProperty(this,"name",{value:"WalletLoginError"})}static fromCode(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new C(t,"".concat(C.messages[t]).concat(e))}static connectionError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return C.fromCode(5111,t)}static disconnectionError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return C.fromCode(5112,t)}static notConnectedError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return C.fromCode(5113,t)}static popupClosed(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return C.fromCode(5114,t)}}function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}(0,r.Z)(C,"messages",{5e3:"Custom",5111:"Failed to connect with wallet",5112:"Failed to disconnect from wallet",5113:"Wallet is not connected",5114:"Wallet popup has been closed by the user"});const P={OPENLOGIN:"openlogin",WALLET_CONNECT_V1:"wallet-connect-v1",WALLET_CONNECT_V2:"wallet-connect-v2"},T=b({TORUS_SOLANA:"torus-solana",PHANTOM:"phantom"},P),k=b({TORUS_EVM:"torus-evm",METAMASK:"metamask"},P),I=b(b({},k),T);function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const R="external",S={NOT_READY:"not_ready",READY:"ready",CONNECTING:"connecting",CONNECTED:"connected",DISCONNECTED:"disconnected",ERRORED:"errored"},j=D(D({},S),{},{ADAPTER_DATA_UPDATED:"adapter_data_updated"});class x extends h{constructor(){super(...arguments),(0,r.Z)(this,"adapterData",{}),(0,r.Z)(this,"chainConfig",null)}get chainConfigProxy(){return this.chainConfig?D({},this.chainConfig):null}setChainConfig(t){if(this.status===S.READY)return;if(!t.chainNamespace)throw v.notReady("ChainNamespace is required while setting chainConfig");const e=O(t.chainNamespace,t.chainId);this.chainConfig=D(D({},e),t)}setAdapterSettings(t){}checkConnectionRequirements(){if(this.name!==I.WALLET_CONNECT_V1||this.status!==S.CONNECTING){if(this.status===S.CONNECTING)throw v.notReady("Already connecting");if(this.status===S.CONNECTED)throw C.connectionError("Already connected");if(this.status!==S.READY)throw C.connectionError("Wallet adapter is not ready yet")}}checkInitializationRequirements(){if(this.status!==S.NOT_READY){if(this.status===S.CONNECTED)throw v.notReady("Already connected");if(this.status===S.READY)throw v.notReady("Adapter is already initialized")}}updateAdapterData(t){this.adapterData=t,this.emit(j.ADAPTER_DATA_UPDATED,{adapterName:this.name,data:t})}}var _=u().getLogger("web3auth-logger");var W=n(2093);function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}class Z extends x{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),(0,r.Z)(this,"name",I.WALLET_CONNECT_V1),(0,r.Z)(this,"adapterNamespace",E.EIP155),(0,r.Z)(this,"currentChainNamespace",g.EIP155),(0,r.Z)(this,"type",R),(0,r.Z)(this,"adapterOptions",void 0),(0,r.Z)(this,"status",S.NOT_READY),(0,r.Z)(this,"adapterData",{uri:""}),(0,r.Z)(this,"connector",null),(0,r.Z)(this,"wcProvider",null),(0,r.Z)(this,"rehydrated",!1),this.adapterOptions=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t),this.chainConfig=t.chainConfig||null}get connected(){var t;return!(null===(t=this.connector)||void 0===t||!t.connected)}get provider(){var t;return(null===(t=this.wcProvider)||void 0===t?void 0:t.provider)||null}set provider(t){throw new Error("Not implemented")}async init(){super.checkInitializationRequirements(),this.chainConfig||(this.chainConfig=O(g.EIP155,1)),this.connector=this.getWalletConnectInstance(),this.wcProvider=new W.WalletConnectProvider({config:{chainConfig:this.chainConfig}}),this.emit(j.READY,I.WALLET_CONNECT_V1),this.status=S.READY,this.connector.connected&&(this.rehydrated=!0,await this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId.toString()}))}async connect(){if(super.checkConnectionRequirements(),!this.connector)throw v.notReady("Wallet adapter is not ready yet");if(this.connected)return await this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId.toString()}),this.provider;var t;this.status!==S.CONNECTING&&(null!==(t=this.adapterOptions.adapterSettings)&&void 0!==t&&t.qrcodeModal&&(this.connector=this.getWalletConnectInstance()),await this.createNewSession(),this.status=S.CONNECTING,this.emit(j.CONNECTING,{adapter:I.WALLET_CONNECT_V1}));return new Promise(((t,e)=>{if(!this.connector)return e(v.notReady("Wallet adapter is not ready yet"));this.connector.on("modal_closed",(async()=>(this.status=S.READY,this.emit(j.READY,I.WALLET_CONNECT_V1),e(new Error("User closed modal")))));try{this.connector.on("connect",(async(e,n)=>(e&&this.emit(j.ERRORED,e),await this.onConnectHandler(n.params[0]),t(this.provider))))}catch(n){_.error("Wallet connect v1 adapter error while connecting",n),this.status=S.READY,this.rehydrated=!0,this.emit(j.ERRORED,n),e(n instanceof N?n:C.connectionError("Failed to login with wallet connect: ".concat((null===n||void 0===n?void 0:n.message)||"")))}}))}async getUserInfo(){if(!this.connected)throw C.notConnectedError("Not connected with wallet, Please login/connect first");return{}}async disconnect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanup:!1};const{cleanup:e}=t;if(!this.connector||!this.connected)throw C.notConnectedError("Not connected with wallet");await this.connector.killSession(),this.rehydrated=!1,e?(this.connector=null,this.status=S.NOT_READY,this.wcProvider=null):this.status=S.READY,this.emit(j.DISCONNECTED)}async createNewSession(){var t,e;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{forceNewSession:!1};if(!this.connector)throw v.notReady("Wallet adapter is not ready yet");if(n.forceNewSession&&this.connector.pending&&await this.connector.killSession(),null===(t=this.adapterOptions)||void 0===t||null===(e=t.adapterSettings)||void 0===e||!e.qrcodeModal)return new Promise(((t,e)=>{var n;if(!this.connector)return e(v.notReady("Wallet adapter is not ready yet"));_.debug("creating new session for web3auth wallet connect"),this.connector.on("display_uri",(async(n,r)=>{var o;if(n)return this.emit(j.ERRORED,C.connectionError("Failed to display wallet connect qr code")),e(n);const i=r.params[0];return this.updateAdapterData({uri:i}),null===(o=this.connector)||void 0===o||o.off("display_uri"),t()})),this.connector.createSession({chainId:parseInt((null===(n=this.chainConfig)||void 0===n?void 0:n.chainId)||"0x1",16)}).catch((t=>(_.error("error while creating new wallet connect session",t),this.emit(j.ERRORED,t),e(t))))}));var r;await this.connector.createSession({chainId:parseInt((null===(r=this.chainConfig)||void 0===r?void 0:r.chainId)||"0x1",16)})}async onConnectHandler(t){if(!this.connector||!this.wcProvider)throw v.notReady("Wallet adapter is not ready yet");if(!this.chainConfig)throw v.invalidParams("Chain config is not set");const{chainId:e}=t;_.debug("connected chainId",e);const n=parseInt(e,"string"!==typeof(r=e)&&"number"!==typeof r||!/^(-)?0x[0-9a-f]*$/i.test(r)?10:16);var r;if(n!==parseInt(this.chainConfig.chainId,16))return await this.createNewSession({forceNewSession:!0}),void this.emit(j.ERRORED,v.fromCode(5e3,"Not connected to correct chainId. Expected: ".concat(this.chainConfig.chainId,", Current: ").concat(n,", Please switch to correct chain from wallet")));await this.wcProvider.setupProvider(this.connector),this.subscribeEvents(this.connector),this.status=S.CONNECTED,this.emit(j.CONNECTED,{adapter:I.WALLET_CONNECT_V1,reconnected:this.rehydrated})}subscribeEvents(t){t.on("session_update",(async t=>{t&&this.emit(j.ERRORED,t)}))}getWalletConnectInstance(){const t=this.adapterOptions.adapterSettings||{};return t.bridge=t.bridge||"https://bridge.walletconnect.org",new c(t)}}}}]);
self.__uv$config = {
    prefix: '/staticproxy/indiumlite/',
    bare: 'socks5://p.webshare.io:9999', // Webshare SOCKS5 proxy details
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/staticproxy/uv/uv.handler.js',
    bundle: '/staticproxy/uv/uv.bundle.js',
    config: '/staticproxy/uv/uv.config.js',
    sw: '/staticproxy/uv/uv.sw.js',
};

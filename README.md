## start php-fpm which listen port 9000

```bash
/usr/sbin/php-fpm
```

## install http-server

```bash
npm install -g http-server
```

### run http-server under w2.example.com and listen port 5000

```bash
http-server -p 5000
```

## nginx cors config example

```bash
$ cat nginx/cors

#
# CORS header support
#
# One way to use this is by placing it into a file called "cors_support"
# under your Nginx configuration directory and placing the following
# statement inside your **location** block(s):
#
#   include cors_support;
#
# As of Nginx 1.7.5, add_header supports an "always" parameter which
# allows CORS to work if the backend returns 4xx or 5xx status code.
#
# For more information on CORS, please see: http://enable-cors.org/
# Forked from this Gist: https://gist.github.com/michiel/1064640
#

set $cors '';
if ($http_origin ~ '^https?://(localhost|www\.yourdomain\.com|www\.yourotherdomain\.com)') {
        set $cors 'true';
}

if ($cors = 'true') {
        add_header 'Access-Control-Allow-Origin' "$http_origin" always;
        add_header 'Access-Control-Allow-Credentials' 'true' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,Keep-Alive,Origin,User-Agent,X-Requested-With' always;
        # required to be able to read Authorization header in frontend
        #add_header 'Access-Control-Expose-Headers' 'Authorization' always;
}

if ($request_method = 'OPTIONS') {
        # Tell client that this pre-flight info is valid for 20 days
        add_header 'Access-Control-Max-Age' 1728000;
        add_header 'Content-Type' 'text/plain charset=UTF-8';
        add_header 'Content-Length' 0;
        return 204;
}
```

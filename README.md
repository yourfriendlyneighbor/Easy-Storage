Easy Storage
============

Easy Storage is a Javascript Library that makes Localstorage,
SessionStorage and Cookies, easier and quicker to type.

Documentation

#### Localstorage

-   [Create a Localstorage Item](#crtLSI)
-   [Retrive a Localstorage Item](#getLSI)
-   [Remove a Localstorage Item](#removeLSI)
-   [Clear Localstorage](#clrLSI)

#### Session Storage

-   [Create a Session Storage Item](#crtSS)
-   [Retrive a Session Storage Item](#getSS)
-   [Remove a Session Storage Item](#removeSS)
-   [Clear Session Storage](#clrSS)

#### Cookies

-   [Create a Cookie](#crtCookie)
-   [Retrive a Cookie](#getCookie)
-   [Remove a Cookie](#removeCookie)
-   [Clear Cookies](#clrCookie)

* * * * *

Local Storage
-------------

#### Creating a Localstorage Item

To create a Localstorage Item do the following code:

        es.crtLSI(value, key)
      

Example:

        es.crtLSI("Name", "John")
      

#### Retriving a Localstorage Item

All that is needed to do to retrive a Localstorage item is:

        var myVar = es.getLSI(key)
      

Example:

        var name = es.getLSI("name")
      

Easy Storage
============

Want to help out? Have an idea?
===============================

Code your idea away and send me a pull request.

Easy Storage is a Javascript Library that makes Localstorage, SessionStorage and Cookies, easier and quicker to type.

Documentation
=============

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

* * * * *

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
      

#### Removing a Localstorage Item

To remove a localstorage item the following code is needed:

        es.removeLSI(key)
      

Example:

        es.removeLSI("name")
      

#### Clearing all localstorage items

Type the following code to clear all the localstorage

        es.clearLSI()
      

Example:

        if(3 + 3 == 6) {
          es.clearLSI()
        }
      

* * * * *

Session Storage
---------------

* * * * *

#### Creating a Session Storage Item

To create a Session Storage Item do the following code:

        es.crtSS(value, key)
      

Example:

        es.crtSS("Name", "John")
      

#### Retriving a Session Storage Item

All that is needed to do to retrive a Session Storage item is:

        var myVar = es.getSS(key)
      

Example:

        var name = es.getSS("name")
      

#### Removing a Session Storage Item

To remove a Session Storage item the following code is needed:

        es.removeSS(key)
      

Example:

        es.removeSS("name")
      

#### Clearing all Session Storage items

Type the following code to clear all the Session Storage

        es.clearSS()
      

Example:

        if(4 + 5 > 1) {
          es.clearSS()
        }
      

* * * * *

Cookies
-------

* * * * *

#### Creating a Cookie

To create a Cookie, do the following code:

**Expires, and Date is optional**

        es.crtCookie(cookie, value, expires, date)
      

Example:

        es.crtCookie("Name", "John", "Thu", "01 Jan 1970 00:00:00 GMT")
      

#### Retriving a Cookie

All that is needed to do to retrive a Cookie is:

        var myVar = es.getCookie(cookie)
      

Example:

        var name = es.getCookie("name")
      

#### Removing Cookies

To remove a Cookie, the following code is needed:

        es.removeCookie(cookie)
      

Example:

        es.removeCookie("name")
      

#### Clearing all the Cookies

Type the following code to clear all the Cookies

        es.clearSS()
      

Example:

        if(9 * 5 == 45) {
          es.clearCookie()
        }
      

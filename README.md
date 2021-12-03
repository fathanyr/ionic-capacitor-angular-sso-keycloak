# IONIC 5 CAPACITOR SSO DEMO

SSO for Mobile Apps

## Supported Platform

- Web
- Android

## HOW TO USE

- npm install
- ionic cap add android
- add following lines to AndroidManifest.xml

```bash
<intent-filter>
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
  <data android:scheme="@string/custom_url_scheme" />
</intent-filter>
```

- add / edit this line in environment.ts

```bash
  auth_config: {
    server_host: 'YOUR_SERVER_HOST',
    client_id: 'YOUR_CLIENT_ID',
    redirect_url: 'com.ionic.sso://callback',
    end_session_redirect_url: 'com.ionic.sso://endsession',
    scopes: 'openid offline_access',
    pkce: false
  }
```

## USED PLUGIN

- Ionic App Auth (https://www.npmjs.com/package/ionic-appauth)

```bash
npm i ionic-appauth
```

- @openid/appauth (https://www.npmjs.com/package/@openid/appauth)

```bash
npm i @openid/appauth
```

- capacitor-secure-storage-plugin (https://www.npmjs.com/package/capacitor-secure-storage-plugin)

```bash
npm i capacitor-secure-storage-plugin
```

### REFERENCES

- https://github.com/wi3land/ionic-appauth/tree/master/demos/angular-capacitor

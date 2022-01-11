import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

const FbLogin = resCallBack => {
  LoginManager.logOut();
  return LoginManager.logInWithPermissions(['email,pulic_profile']).then(
    result => {
      console.log('Facebook Result ===> ', result);
      if (
        result.declinedPermissions &&
        result.declinedPermissions.includes('email')
      ) {
        resCallBack({message: 'Email is Required'});
      }
      if (result.isCancelled) {
        console.log('Facebook Login cancelled!');
      } else {
        const infoRequest = new GraphRequest(
          '/me?fields=email,name,picture',
          null,
          resCallBack,
        );
        new GraphRequestManager().addRequest(infoRequest).start();
      }
    },
    function (error) {
      console.log('Error in Facebook Login ==> ', error);
    },
  );
};

const onFaceBookLogin = async () => {
  try {
    await FbLogin(_responseInfoCallBack);
  } catch (error) {
    console.log('Error in onFaceBookLogin ==>', error);
  }
};

const _responseInfoCallBack = (error, result) => {
  if (error) {
    console.log('Error in ResponseCallBack ==>', error);
    return;
  } else {
    const userInfo = result;
    console.log('FaceBook user data ==>', userInfo);
  }
};

export default onFaceBookLogin;

import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Upload, Checkbox, Button, message, notification } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import BackCountinueBtn from '../../../components/ButtonsList';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { handleProductFormDataChange } from '../../../store/product/action';
import UploadFileIcon from '../../../assests/images/Icon metro-file-upload.png';
import firebase from '../../../firebase';
import './photos.css';

const { Title, Text } = Typography;

const Photos = ({ history }) => {
  const {
    productReducer: { productFormData },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  // function getBase64(img, callback) {
  //   const reader = new FileReader();
  //   reader.addEventListener('load', () => callback(reader.result));
  //   reader.readAsDataURL(img);
  // }
  const openNotificationWithIcon = (type, messages, onCloseMsg) => {
    notification[type]({
      message: type,
      description: messages,
      onClose: () => {
        // onCloseMsg;
        // dispatch(userActions.CloseErrorMsg());
      },
    });
  };
  function onChangeCheck(e) {
    dispatch(handleProductFormDataChange({ name: e.target.name, value: e.target.checked }));
  }

  const goToPreviousPath = (e) => {
    e.preventDefault();
    history.goBack();
  };

  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  const handleChange = (info, value) => {
    setLoading(true);
    const file = info.file.originFileObj;
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var uploadTask = storageRef.child(file.name).put(file);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        var progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('progesss', progress);
        // this.setState({ progress });
      },
      (error) => {
        throw error;
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          setLoading(false);
          const image = [...imageUrls];
          image.push(url);
          dispatch(handleProductFormDataChange({ name: value, value: image }));
          setImageUrls(image);
        });
        document.getElementById('file').value = null;
      },
    );
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <img src={UploadFileIcon} />}
      <div style={{ marginTop: 8 }}>Click here to choose file</div>
    </div>
  );

  console.log('productFormData', productFormData?.photos, productFormData?.photos.length);

  return (
    <>
      <div className="photos-item-outer">
        <Row>
          <Col span={24}>
            <div className="photos_sec_heading">
              <Title level={5}>Please upload a minimum of 5 photos</Title>
            </div>
          </Col>
        </Row>
        <div className="photos-items">
          <Row>
            <Col lg={12} md={24} sm={24} xs={24}>
              <div className="photos_upload">
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  // onRemove={true}
                  // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={(value) => handleChange(value, 'photos')}
                  value={productFormData?.photos}
                >
                  {uploadButton}
                </Upload>
              </div>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <div className="photos_upload_data">
                {imageUrls &&
                  imageUrls.map((item) => (
                    <div className="upload_data_item">
                      <img src={item} alt="avatar" style={{ width: '100%' }} />
                    </div>
                  ))}
              </div>
            </Col>
          </Row>
          <div className="photos_text_info">
            <Row>
              <Col span={24}>
                <Text>
                  Increase your chances of a getting a higher bid by using our Amibid fulfilment
                  system. Send us your item and we'll have it appraised, professionally photographed
                  and featured highly in one of our auctions. For a guaranteed smooth transaction,
                  we'll even take care of delivering it to the buyer.
                </Text>
              </Col>
            </Row>
          </div>
          <div className="photos_check_box">
            <Row>
              <Col span={24}>
                <Checkbox
                  name="itemFullFill"
                  onChange={onChangeCheck}
                  value={productFormData?.itemFullFill}
                >
                  I’d like to submit my item through the fulfilment centre
                </Checkbox>
              </Col>
            </Row>
          </div>
          {/* <BackCountinueBtn
            ButtonName="Continue"
            // route={goToForwardPath}
            route="/List-items/Item specifics"
            returnBack={goToPreviousPath}
          /> */}
          <div className="btn_outer">
            <div className="back_icon" onClick={goToPreviousPath}>
              <LeftOutlined /> Back
            </div>
            <div className="contine_btn">
              <Button
                onClick={() =>
                  imageUrls.length >= 5
                    ? history.push('/List-items/Item specifics')
                    : openNotificationWithIcon('error', 'Upload Minimum 5 images')
                }
              >
                Continue
                {/* <Link to={route}>{ButtonName}</Link> */}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Photos;

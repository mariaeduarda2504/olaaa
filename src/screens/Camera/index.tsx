import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import React from 'react';
import { useRef, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Button, Text, Image, TouchableOpacity, View } from 'react-native';
import { ComponentButtonInterface, ComponentButtonTakePicture } from '../../components';
import { styles } from './styles';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
interface IPhoto {
  height: string
  uri: string
  width: string
}

export function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permissionCamera, requestPermissionCamera] = Camera.useCameraPermissions()
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const ref = useRef<Camera>(null)
  const [takePhoto, setTakePhoto] = useState(false)

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Nós precisamos da sua permissão para acessar sua câmera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Nós precisamos da sua permissão para acessar sua câmera</Text>
        <Button onPress={requestPermissionCamera} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture(){
    if(ref.current){
      const picture = await ref.current.takePictureAsync()
      console.log(picture)
      setPhoto(picture)
    }
  async function savePhoto() {
    const asset = await MediaLibrary.createAssetAsync(photo!.uri)
    MediaLibrary.createAlbumAsync("Images", asset, false)
    Alert.alert("Imagem salva com sucesso!")
  }
  async function pickImage() {
    const result= await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    if (!result.canceled) {
      setPhoto(result.assets[0])
    }
  }
}

  function pickImage(): void {
    throw new Error('Function not implemented.');
  }

  return (
  <View style={styles.container}>
    {takePhoto ? (
      <>
        <TouchableOpacity onPress={toggleCameraType} style={styles.button}>
          <Entypo name="cycle" size={42} color="black" />
        </TouchableOpacity>
        <Camera style={styles.camera} type={type} ref={ref} />
        <ComponentButtonTakePicture onPress={takePicture} />
      </>
    ) : (
      <>
        <ComponentButtonInterface title="Tirar foto" type="primary" onPressI={takePicture} />
        <Image source={{ uri: photo.uri }} style={styles.img} />
        <ComponentButtonInterface title="Salvar imagem" type="primary" onPressI={savePhoto} />
        <ComponentButtonInterface title="Abrir imagem" type="primary" onPressI={pickImage} />
      </>
    )}

    </View>
  );
}
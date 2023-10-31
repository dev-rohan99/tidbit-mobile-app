/* eslint-disable */
import { SafeAreaView, ScrollView, TouchableOpacity, Image, View, Text, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import TopHeader from '../components/TopHeader';
import { EllipsisHorizontalIcon } from 'react-native-heroicons/outline';
import { CheckBadgeIcon, FaceSmileIcon, PhotoIcon, TagIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { userAllPostGetAction, userPostCreateAction } from '../redux/actions/postAction';
import ImagePicker, { ImageOrVideo } from "react-native-image-crop-picker";

type Props = {
  navigation: any
}

const PostScreen = ({ navigation }: Props) => {

  const { user } = useSelector((state: any) => state.user);
  const { isSuccess, loading } = useSelector((state: any) => state.post);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [input, setInput] = useState({
    title: "",
    image: "",
  });
  const [replies, setReplies] = useState([{
    title: "",
    image: "",
    user
  }]);
console.log(user);

  useEffect(() => {
    if(replies.length === 1 && replies[0].title === "" && replies[0].image === ""){
      setReplies([]);
    }
    if(isSuccess){
      navigation.goBack();
      userAllPostGetAction()(dispatch);
    }
    setReplies([]);
    setInput({
      title: "",
      image: "",
    });
  }, [isSuccess]);

  const postImageUpload = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
      includeBase64: true
    }).then((image: ImageOrVideo | null) => {
      if(image){
        setInput({
          ...input,
          image: "data:image/jpeg;base64," + image.data
        });
      }
    });
  }

  const createPost = () => {
    if(input.title !== "" || (input.image !== "" && !loading)){
      userPostCreateAction(input.title, input.image, user, replies)(dispatch);
    }
  }

  return (
    <SafeAreaView className="h-[100%]">
      <TopHeader/>

      <ScrollView horizontal={false}>
        
        <View className="px-5 mt-3 bg-white py-4 shadow-lg rounded-3xl mx-4 mb-[75px]">
          <View className="flex flex-row justify-between items-center">
              <View className="flex flex-row gap-3 items-center">
                  <TouchableOpacity className="w-[50px] h-[50px] p-[1.5px] object-cover rounded-full border-[2px] border-[#412FC9]">
                      <Image className="w-[100%] h-[100%] object-cover rounded-full" source={{uri: user?.avatar?.url ? user?.avatar?.url : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"}}/>
                  </TouchableOpacity>

                  <View>
                      <View className="flex flex-row justify-start items-center">
                          <Text className="text-[16px] font-bold text-[#000] mr-1 mb-[1px]">{user?.name ? user?.name : "Anonymous"}</Text>
                          <CheckBadgeIcon size={21} color="#412FC9"/>
                      </View>
                      <View className="flex flex-row">
                        <Text className="text-[13px] font-semibold bg-[#c7c7c7] px-3 text-[#000] rounded-md">Public</Text>
                      </View>
                  </View>
              </View>

              <TouchableOpacity className="py-2">
                  <EllipsisHorizontalIcon size={35} color="#000"/>
              </TouchableOpacity>
          </View>

          <View className="" >
            <TextInput
              className="px-4 rounded-lg mt-3"
              multiline={true}
              numberOfLines={10}
              placeholder="Write you tidbit..."
              placeholderTextColor="grey"
              style={{ height:200, textAlignVertical: 'top', fontSize: 20, color: "#000", backgroundColor: "#f0f0f0"}}
            />

            <View classname="mt-3">

              <View className="w-[100%] h-[150px] mt-3">
                <Image className="w-[100%] h-[100%] object-cover rounded-lg" source={{uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"}}/>
              </View>

            </View>

            <View>
              <View className="mt-5 mb-2 flex flex-row justify-between items-center">
                <Text className="text-[#000] text-[16px] font-bold">Add to your tidbit</Text>
                <View className="flex flex-row justify-end gap-x-3 items-center">

                  <TouchableOpacity onPress={postImageUpload}>
                    <PhotoIcon size={35} color="#412FC9"/>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <TagIcon size={35} color="#0DBC79"/>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <FaceSmileIcon size={35} color="#ed9e00"/>
                  </TouchableOpacity>

                </View>
              </View>

              
            </View>
          </View>

        </View>

        

      </ScrollView>

      <View  style={{ position: "absolute", bottom: 0 }} className="w-[100%] my-3">
        <View className="w-[100%] flex flex-row justify-between items-center px-4">
          <TouchableOpacity className="w-[40%] rounded-lg py-3 px-4 flex justify-center items-center bg-[#bdbdbdfe]">
            <Text className="text-[17px] font-bold text-[#000]">Discard</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={createPost} className="w-[57%] rounded-lg py-3 px-4 flex justify-center items-center bg-[#412FC9]">
            <Text className="text-[17px] font-bold text-[#fff]">Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PostScreen;

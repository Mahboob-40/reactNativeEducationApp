import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from '../api/Courseapi'

const CourseDetails = ({navigation, route}) => {
    const id = route.params.courseId;
    // console.log(id)

    const selectedCourse = Courses.find((elem)=>{
        return id === elem.id
    })
  return (
     <View style={styles.mainContainer}>
           <View style={styles.courseContainer}>
               <View>
                 <Image style={styles.cardImage}
                 source={selectedCourse.image}
                 resizeMode="contain"
                 />
               </View>
               <View>
                  <Text style={styles.mainHeader}>{selectedCourse.title}</Text>
                  <Text style={styles.description}>{selectedCourse.description}</Text>
                  <Text style={styles.description}>{selectedCourse.course1}</Text>
                  <Text style={styles.description}>{selectedCourse.course2}</Text>
                  <Text style={styles.description}>{selectedCourse.course3}</Text>
               </View>
               <View style={styles.buttonContainer}>
               <Text style={styles.price}> {selectedCourse.price} </Text>
                 <TouchableOpacity style={styles.buttonStyle}
                 onPress={()=>navigation.navigate("Course")
                }
                 >
                   <Text style={styles.buttonText}>Join Now</Text>
                 </TouchableOpacity>
               </View>
           </View>
        </View>
  )
}

export default CourseDetails

const styles = StyleSheet.create({
    cardImage : {
    width : "100%",
    height : undefined,
    aspectRatio : 1
  },
  mainContainer : {
    paddingHorizontal : 20,
    backgroundColor : "#fff",
    height : "100%"
  },
  courseContainer : {
    paddingHorizontal : 30,
    paddingBottom : 20,
    backgroundColor : "rgba(255,255,255,0.90)",
    textAlign : "center",
    borderRadius : 5,
    shadowColor : "grey",
    shadowOffset : {width : 0, height : 0},
    shadowOpacity : 0.5,
    shadowRadius : 8,
    elevation : 8,
    marginVertical : 30
  },
  mainHeader : {
    fontSize : 22,
    color : "#344052",
    textTransform : "uppercase",
    paddingBottom : 15,
    fontFamily : "Nunito_600SemiBold"
  },
  description : {
    fontFamily : "JosefinSans_400Regular",
    textAlign : "left",
    fontSize : 17,
    paddingBottom : 20,
    color : "#7d7d7d"
  },
  buttonContainer : {
    display : "flex",
    flexDirection : "row",
    justifyContent : "center"
  },
  buttonStyle : {
    backgroundColor : "#0452d9",
    borderRadius : 5,
    paddingVertical : 10,
    paddingHorizontal : 20,
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
  },
  buttonText : {
    fontSize : 20,
    color : "#eee",
    fontFamily : "JosefinSans_500Medium",
    textTransform : "capitalize"
  },
  price :{
    fontSize : 20,
    backgroundColor : "#809fff",
    fontFamily : "JosefinSans_500Medium",
    paddingHorizontal : 20,
    paddingVertical : 15,
    color : "#fff"
  }
})
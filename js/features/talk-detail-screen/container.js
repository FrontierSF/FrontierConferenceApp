import { connect } from 'react-redux';
import React from 'react';
import { BackHandler, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'

import BaseContainer from '../../shared/base-container';

import OrangeGradient from '../../shared/components/OrangeGradient'
import TalkInfo from '../schedule/TalkInfo'
import { contains } from 'ramda'
import LoadingScreen from '../../shared/app/loading/';

import styles from './TalkDetailScreenStyle'

const mapStateToProps = state => ({
  talk: state.talkDetails.talk
});

const mapDispatchToProps = (dispatch, props) => ({
});

class TalkDetailScreenContainer extends BaseContainer {
  renderSpeaker = (speaker, index) => {
    return (
      <View key={index}>
        <Text style={styles.heading}>
          {speaker.name}
        </Text>
        <Text style={styles.description}>
          {speaker.bio}
        </Text>
      </View>
    )
  }
  isSpecial = () => false//() => contains(this.props.talk.title, this.props.talk.specialTalks)
  renderSpeakers = () => {
    const { speakerInfo } = this.props.talk

    return (speakerInfo.map((speaker, index) => this.renderSpeaker(speaker, index)))
  }

  render () {
    console.log('Render with details ');
    console.log(this.props.talk);
    const {title, eventStart, setReminder, removeReminder} = this.props.talk
    return (
      <OrangeGradient style={styles.linearGradient}>
        <ScrollView>
          <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={this.goBack}>
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <View style={styles.cardShadow1} />
            <View style={styles.cardShadow2} />
            <Image
              style={styles.avatar}
              source={{uri: `https://infinite.red/images/chainreact2017/${this.props.talk.image}.png`}}
            />
            <View style={styles.card}>
              <Text style={styles.sectionHeading}>
                TALK
              </Text>
              <Text style={styles.heading}>
                {this.props.talk.title}
              </Text>
              <Text style={styles.description}>
                {this.props.talk.description}
              </Text>
              <Text style={styles.sectionHeading}>
                ABOUT
              </Text>
              {this.renderSpeakers()}
            </View>
            <TalkInfo
              start={new Date(this.props.talk.eventStart)}
              duration={Number(this.props.talk.duration)}
              remindMe={this.isSpecial()}
              toggleRemindMe={() => {}}
              onPressGithub={() => {}}
              onPressTwitter={() => {}}
              isFinished={this.props.talk.currentTime > this.props.talk.eventStart}
              showWhenFinished={false}
            />
          </View>
        </ScrollView>
      </OrangeGradient>
    )
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  TalkDetailScreenContainer
);

export default reduxContainer;

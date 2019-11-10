<template>
  <q-page class="flex flex-center">
    <template>
      <div class="q-pa-md">
        <h1>
          Song Playlist
        </h1>
        <p>
          {{computed()}}
        </p>
        <q-input outlined v-model="songTitle" label="Song Title" />
        <q-input outlined v-model="artist" label="Artist"/>
        <q-btn :color="edit ? 'primary' : 'green'" :label="edit ? 'Update Song' : 'Add Song'" @click="edit ? updateMusic() : addMusic()" class="full-width"/>
        <q-list bordered separator style="min-width: 400px">
          <q-item v-for="(music, index) in musicList" :key="index">
            <q-item-section>
              <q-item-label>{{index +1}}. {{ music.songTitle }}</q-item-label>
              <q-item-label caption>{{ music.artist }}</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-btn color="primary" icon="edit" @click="editMusic(music, index)"/>
              <q-btn color="red" icon="delete" @click="deleteMusic(index)"/>
            </q-item-section>
          </q-item>         
        </q-list>
      </div>
    </template>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  methods: {
    // showSongAndArtist () {
    //   return computed() != " by " ? computed() : "";
    // },
    computed () {
      return this.songTitle + " by " + this.artist;
    },
    addMusic () {
      // use this kapag nasa loob ng script
      this.musicList.push({
        songTitle: this.songTitle,
        artist: this.artist
      })
      this.artist=""
      this.songTitle=""
      this.$router.push('/login')
    },
    deleteMusic (i) {
      this.musicList.splice(i, 1)
      console.log(i)
      console.log(this.musicList)
    }, 
    editMusic (d, i) {
      this.artist = d.artist
      this.songTitle = d.songTitle
      this.edit=true
      this.index= i
    },
    cancelEdit () {
      this.artist=""
      this.songTitle=""
      this.edit=false
      this.index=null
    },
    updateMusic () {
      this.musicList[this.index] = {artist: this.artist, songTitle: this.songTitle}
      this.cancelEdit()
    }
  },
  data () {
    return {
      musicList: [
        { songTitle: "Manok na Pula", artist: "Vic Desucatan"},
        { songTitle: "Wind of Change", artist: "Scorpion"}
      ],
      artist: "",
      songTitle: "",
      index: null,
      edit: false,
    }
  }
}
</script>

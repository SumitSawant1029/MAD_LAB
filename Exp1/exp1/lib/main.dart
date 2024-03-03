import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Emotion Music Recommender',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: EmotionMusicRecommender(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class EmotionMusicRecommender extends StatefulWidget {
  @override
  _EmotionMusicRecommenderState createState() => _EmotionMusicRecommenderState();
}

class _EmotionMusicRecommenderState extends State<EmotionMusicRecommender> {
  int _selectedTabIndex = 0;

  void _onItemTapped(int index) {
    setState(() {
      _selectedTabIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Emotion Music Recommender'),
      ),
      body: Center(
        child: _getBody(_selectedTabIndex),
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedTabIndex,
        onTap: _onItemTapped,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.music_note),
            label: 'Recommendations',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            label: 'Settings',
          ),
        ],
      ),
    );
  }

  Widget _getBody(int index) {
    switch (index) {
      case 0:
        return _buildHome();
      case 1:
        return _buildRecommendations();
      case 2:
        return _buildSettings();
      default:
        return Container();
    }
  }

  Widget _buildHome() {
    return Center(
      child: Text('Home Page'),
    );
  }

  Widget _buildRecommendations() {
    return Center(
      child: Text('Recommendations Page'),
    );
  }

  Widget _buildSettings() {
    return Center(
      child: Text('Settings Page'),
    );
  }
}

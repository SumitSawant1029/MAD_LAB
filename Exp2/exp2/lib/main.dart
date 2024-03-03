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
        title: Text(
          'Emotion Music Recommender',
          style: TextStyle(
            fontWeight: FontWeight.bold,
          ),
        ),
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
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            Icons.home,
            size: 100.0,
            color: Colors.blue,
          ),
          Padding(
            padding: EdgeInsets.all(20.0),
            child: Text(
              'Welcome to the Home Page',
              style: TextStyle(
                fontSize: 24.0,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          Image.asset(
            'assets/home_image.png',
            width: 200.0,
          ),
        ],
      ),
    );
  }

  Widget _buildRecommendations() {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            Icons.music_note,
            size: 100.0,
            color: Colors.green,
          ),
          Padding(
            padding: EdgeInsets.all(20.0),
            child: Text(
              'Discover New Music Here',
              style: TextStyle(
                fontSize: 24.0,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          Image.network(
            'https://via.placeholder.com/200',
            width: 200.0,
          ),
        ],
      ),
    );
  }

  Widget _buildSettings() {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            Icons.settings,
            size: 100.0,
            color: Colors.red,
          ),
          Padding(
            padding: EdgeInsets.all(20.0),
            child: Text(
              'Settings Page',
              style: TextStyle(
                fontSize: 24.0,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          Text(
            'Adjust Your Preferences',
            style: TextStyle(
              fontSize: 18.0,
            ),
          ),
        ],
      ),
    );
  }
}

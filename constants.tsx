
import React from 'react';
import { NavItem, Testimonial, Course, ImprovementData } from './types';
import { Waves, Award, Users, ShieldCheck } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Success Stories', href: '#stories' },
  { label: 'Register', href: '#register' },
];

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Water Familiarity',
    description: 'Perfect for absolute beginners or those with water phobia. Focus on safety and basic strokes.',
    price: '$120/mo',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1533150537443-424a73950b38?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'c2',
    title: 'Intermediate Stroke',
    description: 'Refine your freestyle, backstroke, and breaststroke technique for efficiency.',
    price: '$150/mo',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'c3',
    title: 'Elite Competition',
    description: 'Advanced training for competitive swimmers. Focus on power, endurance, and flip turns.',
    price: '$200/mo',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1530549387634-e797ea754a96?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'c4',
    title: 'Little Sharks',
    description: 'Fun-filled sessions for kids aged 4-10. Games-based learning in a safe environment.',
    price: '$100/mo',
    level: 'Kids',
    image: 'https://images.unsplash.com/photo-1560090143-1b37560ce79f?q=80&w=1000&auto=format&fit=crop',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Triathlete',
    content: "Lalu Swim transformed my swim leg from a struggle to my strongest discipline. The coaches are world-class!",
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Parent',
    content: "My son was terrified of water. After 3 months at Lalu Swim, he's begging to go to the pool every day.",
    avatar: 'https://i.pravatar.cc/150?u=michael',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Emma Rodriguez',
    role: 'Adult Beginner',
    content: "I never thought I could learn to swim at 40. The patience and structured approach here is unmatched.",
    avatar: 'https://i.pravatar.cc/150?u=emma',
    rating: 4,
  },
];

export const STATS = [
  { icon: <Waves className="w-6 h-6" />, label: 'Pools', value: '12+' },
  { icon: <Users className="w-6 h-6" />, label: 'Members', value: '2.5k+' },
  { icon: <Award className="w-6 h-6" />, label: 'Certifications', value: '150+' },
  { icon: <ShieldCheck className="w-6 h-6" />, label: 'Safety Rating', value: '100%' },
];

export const IMPROVEMENT_CHART_DATA: ImprovementData[] = [
  { week: 'W1', stamina: 20, speed: 15, technique: 10 },
  { week: 'W2', stamina: 35, speed: 25, technique: 25 },
  { week: 'W4', stamina: 55, speed: 45, technique: 50 },
  { week: 'W6', stamina: 75, speed: 65, technique: 80 },
  { week: 'W8', stamina: 95, speed: 85, technique: 90 },
];

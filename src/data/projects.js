import cowork from '../images/cowork2.png';
import ohq from '../images/ohq.png';
import contrary from '../images/contraryresearch.png';
import multicalibThumb from '../images/multicalib_thumb.png';
import stochasticThumb from '../images/stat9310_thumb.png';
import multicalibPaper from '../files/Multicalib_CIS6200.pdf';
import stochasticPaper from '../files/STAT_9310_Project.pdf';

const projects = [
  { title: 'Online regret minimization', kind: 'Course note', date: 'Apr 2025', image: stochasticThumb, description: 'A final project for STAT 9310: Stochastic Processes, connecting online learning and Rademacher complexities.', link: stochasticPaper, linkLabel: 'Read the paper' },
  { title: 'Sequential multicalibration', kind: 'Course project', date: 'Dec 2024', image: multicalibThumb, description: 'A final project for CIS 6200: Conditional Learning on sequential algorithms for multicalibration.', link: multicalibPaper, linkLabel: 'Read the paper' },
  { title: 'OHQ', kind: 'Software', date: 'Jan 2024', image: ohq, description: 'An office-hours management platform built with Penn Labs.', link: 'https://ohq.io', linkLabel: 'Visit OHQ' },
  { title: 'Cowork', kind: 'Software', date: 'Aug 2023', image: cowork, description: 'A virtual workspace where people publicly track tasks with coworkers.', link: 'https://github.com/willdguo/Cowork', linkLabel: 'View on GitHub' },
  { title: 'Startup deep dives', kind: 'Writing', date: 'Dec 2023', image: contrary, description: 'In-depth technology startup memos written for Contrary Research.', link: 'https://research.contrary.com/company?author=William+Guo', linkLabel: 'Read the memos' },
];

export default projects;

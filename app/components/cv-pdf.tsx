import { Document, Font, Image, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import educationData from '../data/education.json';
import otherExperienceData from '../data/other-experience.json';
import workData from '../data/work.json';
import {
  drivingLicences,
  honorsAndAwards,
  interests,
  languages,
  personalInfo,
  skills,
} from '../data/cv-data';

// Register Inter with Latin Extended support (covers Croatian ć, ž, š, đ, č)
Font.register({
  family: 'Inter',
  fonts: [
    { src: '/fonts/Inter-Regular.ttf', fontWeight: 400 },
    { src: '/fonts/Inter-Bold.ttf', fontWeight: 700 },
  ],
});
Font.registerHyphenationCallback((word) => [word]);

// ─── Palette ────────────────────────────────────────────────────────────────
const blue = '#1971c2';
const blueMid = '#1c7ed6';
const blueLight = '#e7f5ff';
const dark = '#212529';
const gray = '#495057';
const muted = '#868e96';
const white = '#ffffff';

// ─── Styles ─────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  page: {
    fontFamily: 'Inter',
    fontSize: 9,
    color: dark,
    backgroundColor: white,
  },

  // Header bar
  header: {
    backgroundColor: blueMid,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageOuter: {
    marginRight: 20,
    padding: 3,
    backgroundColor: white,
    borderRadius: 41,
  },
  profileImageWrap: {
    width: 76,
    height: 76,
    borderRadius: 38,
    overflow: 'hidden',
  },
  profileImage: {
    width: 76,
    height: 76,
    objectFit: 'cover',
  },
  headerInfo: { flex: 1 },
  headerName: {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: 22,
    color: white,
    marginBottom: 3,
  },
  headerTitle: {
    fontSize: 11,
    color: '#a5d8ff',
    marginBottom: 10,
  },
  headerMetaRow: { flexDirection: 'row', flexWrap: 'wrap' },
  headerMeta: { fontSize: 8.5, color: '#d0ebff', marginRight: 14, marginBottom: 2 },

  // Body
  body: { padding: 22, paddingTop: 16 },

  // Sections
  section: { marginBottom: 14 },
  sectionTitle: {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: 8.5,
    color: blue,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    borderBottomWidth: 1,
    borderBottomColor: blue,
    paddingBottom: 3,
    marginBottom: 8,
  },

  // Entry blocks (work / edu / other)
  entryBlock: { marginBottom: 9 },
  entryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1,
  },
  entryTitle: { fontFamily: 'Inter', fontWeight: 700, fontSize: 9.5, flex: 1 },
  entryDate: { fontSize: 8.5, color: muted, textAlign: 'right' },
  entrySub: { fontSize: 8.5, color: gray, marginBottom: 3 },

  // Bullet points
  bullet: { flexDirection: 'row', paddingLeft: 10, marginBottom: 2 },
  bulletDot: { width: 8, fontSize: 9, color: muted },
  bulletText: { flex: 1, fontSize: 8.5, color: gray, lineHeight: 1.4 },

  // Skills pills
  pillRow: { flexDirection: 'row', flexWrap: 'wrap' },
  pill: {
    backgroundColor: blueLight,
    borderRadius: 3,
    paddingHorizontal: 7,
    paddingVertical: 2,
    marginRight: 5,
    marginBottom: 4,
  },
  pillText: { fontFamily: 'Inter', fontWeight: 700, fontSize: 8.5, color: blue },

  // About
  aboutText: { fontSize: 9.5, color: gray, lineHeight: 1.55 },

  // Two-column bottom
  twoCol: { flexDirection: 'row' },
  col: { flex: 1, marginRight: 18 },
  colLast: { flex: 1 },

  // Simple list items
  listItem: { fontSize: 8.5, color: gray, marginBottom: 3 },

  // Footer page number
  footer: {
    position: 'absolute',
    bottom: 14,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 8,
    color: muted,
  },
});

// ─── Helpers ────────────────────────────────────────────────────────────────
function SectionTitle({ children }: { children: string }) {
  return <Text style={s.sectionTitle}>{children}</Text>;
}

function BulletList({ points }: { points: string[] }) {
  return (
    <>
      {points.map((p, i) => (
        <View key={i} style={s.bullet}>
          <Text style={s.bulletDot}>•</Text>
          <Text style={s.bulletText}>{p}</Text>
        </View>
      ))}
    </>
  );
}

// ─── Document ───────────────────────────────────────────────────────────────
interface CvDocumentProps {
  profileImage?: string;
}

export function CvDocument({ profileImage }: CvDocumentProps) {
  const age = new Date().getFullYear() - personalInfo.birthYear;
  // Derive current title from the most recent work entry
  const currentTitle = workData[0]?.position ?? '';

  return (
    <Document title={`${personalInfo.name} — CV`} author={personalInfo.name}>
      <Page size="A4" style={s.page} wrap>
        {/* ── HEADER ──────────────────────────────────────────────── */}
        <View style={s.header}>
          {profileImage ? (
            <View style={s.profileImageOuter}>
              <View style={s.profileImageWrap}>
                <Image src={profileImage} style={s.profileImage} />
              </View>
            </View>
          ) : null}
          <View style={s.headerInfo}>
            <Text style={s.headerName}>{personalInfo.name}</Text>
            <Text style={s.headerTitle}>{currentTitle}</Text>
            <View style={s.headerMetaRow}>
              <Text style={s.headerMeta}>{age} years old</Text>
              <Text style={s.headerMeta}>{personalInfo.location}</Text>
              <Link src={`mailto:${personalInfo.email}`} style={s.headerMeta}>
                {personalInfo.email}
              </Link>
              <Link src={personalInfo.linkedin} style={s.headerMeta}>
                {personalInfo.linkedinHandle}
              </Link>
              <Link src={personalInfo.github} style={s.headerMeta}>
                {personalInfo.githubHandle}
              </Link>
            </View>
          </View>
        </View>

        {/* ── BODY ────────────────────────────────────────────────── */}
        <View style={s.body}>
          {/* About */}
          <View style={s.section}>
            <SectionTitle>About</SectionTitle>
            <Text style={s.aboutText}>{personalInfo.about}</Text>
          </View>

          {/* Skills */}
          <View style={s.section}>
            <SectionTitle>Key Technologies</SectionTitle>
            <View style={s.pillRow}>
              {skills.map((skill) => (
                <View key={skill} style={s.pill}>
                  <Text style={s.pillText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Work Experience */}
          <View style={s.section}>
            <SectionTitle>Work Experience</SectionTitle>
            {workData.map((job) => (
              <View key={job.company} style={s.entryBlock} wrap={false}>
                <View style={s.entryRow}>
                  <Text style={s.entryTitle}>{job.position}</Text>
                  <Text style={s.entryDate}>{job.duration}</Text>
                </View>
                <Text style={s.entrySub}>
                  {job.company} · {job.location}
                </Text>
                <BulletList points={job.bulletPoints} />
              </View>
            ))}
          </View>

          {/* Other Experience */}
          <View style={s.section}>
            <SectionTitle>Other Experience</SectionTitle>
            {otherExperienceData.map((exp) => (
              <View key={exp.company} style={s.entryBlock} wrap={false}>
                <View style={s.entryRow}>
                  <Text style={s.entryTitle}>{exp.position}</Text>
                  <Text style={s.entryDate}>{exp.duration}</Text>
                </View>
                <Text style={s.entrySub}>
                  {exp.company} · {exp.location}
                </Text>
                <BulletList points={exp.bulletPoints} />
              </View>
            ))}
          </View>

          {/* Education */}
          <View style={s.section}>
            <SectionTitle>Education</SectionTitle>
            {educationData.map((edu) => (
              <View key={edu.title} style={s.entryBlock} wrap={false}>
                <View style={s.entryRow}>
                  <Text style={s.entryTitle}>{edu.title}</Text>
                  <Text style={s.entryDate}>{edu.year}</Text>
                </View>
                <Text style={s.entrySub}>
                  {edu.institution} · {edu.location}
                </Text>
              </View>
            ))}
          </View>

          {/* ── Bottom two-column grid ───────────────────────────── */}
          <View style={s.twoCol}>
            <View style={s.col}>
              {/* Languages */}
              <View style={[s.section, { marginBottom: 12 }]}>
                <SectionTitle>Languages</SectionTitle>
                {languages.map((l) => (
                  <Text key={l.name} style={s.listItem}>
                    {l.name} — {l.level}
                  </Text>
                ))}
              </View>

              {/* Honours */}
              <View style={s.section}>
                <SectionTitle>Honours &amp; Awards</SectionTitle>
                {honorsAndAwards.map((a, i) => (
                  <Text key={i} style={s.listItem}>
                    • {a}
                  </Text>
                ))}
              </View>
            </View>

            <View style={s.colLast}>
              {/* Driving licences */}
              <View style={[s.section, { marginBottom: 12 }]}>
                <SectionTitle>Driving Licences</SectionTitle>
                {drivingLicences.map((l, i) => (
                  <Text key={i} style={s.listItem}>
                    • {l}
                  </Text>
                ))}
              </View>

              {/* Interests */}
              <View style={s.section}>
                <SectionTitle>Interests</SectionTitle>
                <Text style={s.listItem}>{interests.join(' · ')}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* ── PAGE NUMBER ─────────────────────────────────────────── */}
        <Text
          style={s.footer}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  );
}

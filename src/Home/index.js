import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { green, blue } from '@material-ui/core/colors';

import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import PolymerIcon from '@material-ui/icons/Polymer';
import FaceIcon from '@material-ui/icons/Face';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import RightPanel from './RightPanel';
const useStyles = makeStyles(theme => ({
	list: {
		width: 'auto',
	},
	fullList: {
		width: 'auto',
	},
	grow: {
		flexGrow: 1,
	},
	colorPrimary: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: '#000000',
		borderWidth: '0px',
		boxShadow: '0px 0px',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		borderColor: '#000000',
		borderWidth: '1px solid',
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		borderColor: 'inherit',
		border: '1px solid',
		borderRadius: '5px',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
	rootCard: {
		width: '30%',
		margin: '2%',
		minWidth: '275px',
		boxShadow: '3px 3px 5px 6px #ccc',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	titleCard: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
		fontWeight: 400,
	},
	fontWeight: {
		fontWeight: '500',
	},
	cardFooter: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
}));

export default function HomePage() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		cards: [
			{ name: 'Dog', type: 'animal' },
			{ name: 'Cat', type: 'animal' },
			{ name: 'John', type: 'Human' },
			{ name: 'Aryan', type: 'Human' },
			{ name: 'Swati', type: 'Human' },
			{ name: 'Pankaj', type: 'Human' },
		],
		left: false,
		right: false,
	});

	const [inputVal, setInputVal] = React.useState('');

	const filterCards = () =>
		state.cards.filter(card => {
			// console.log(inputl)
			if (card.name.toLowerCase().indexOf(inputVal.toLowerCase()) !== -1) {
				return true;
			}
			return false;
		});

	const renderCard = (name, type) => (
		<Card className={classes.rootCard}>
			<CardContent>
				<Typography variant="h5" component="h2" className={classes.fontWeight}>
					{name}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					{type}
				</Typography>
				<Typography variant="body2" component="p">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima qui
					tempora tempore? Accusantium adipisci consequuntur dolorem eaque, enim
					esse fuga, ipsa ipsam nesciunt numquam officiis provident quam quos
					reprehenderit voluptatum.
				</Typography>
			</CardContent>
			<Divider />
			<CardActions className={classes.cardFooter}>
				<FaceIcon style={{ color: green[500] }} />
			</CardActions>
		</Card>
	);

	const toggleDrawer = (anchor, open) => event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = () => (
		<ListWrapper>
			<FirstSection>
				<FirstGroupItem>
					<AccountCircleIcon style={{ color: blue[500] }} />
				</FirstGroupItem>
			</FirstSection>
			<SecondSection>
				<SecondGroupItem>
					<DashboardIcon />
				</SecondGroupItem>
				<SecondGroupItem>
					<PresentToAllIcon />
				</SecondGroupItem>
				<SecondGroupItem>
					<SettingsInputComponentIcon />
				</SecondGroupItem>
				<SecondGroupItem>
					<PolymerIcon />
				</SecondGroupItem>
				<SecondGroupItem>
					<CardGiftcardIcon />
				</SecondGroupItem>
				<SecondGroupItem>
					<SettingsApplicationsIcon />
				</SecondGroupItem>
				<SecondGroupItem>
					<PermDataSettingIcon />
				</SecondGroupItem>
			</SecondSection>
			<ThirdSection>
				<ThirdGroupItem>
					<EmptyIcon />
				</ThirdGroupItem>
			</ThirdSection>
		</ListWrapper>
	);

	return (
		<OutsideWrapper>
			{window.innerWidth < 800 ? (
				<React.Fragment>
					<MenuIconWrapper onClick={toggleDrawer('left', true)}>
						<MenuIcon />
					</MenuIconWrapper>
					<SwipeableDrawer
						anchor="left"
						open={state.left}
						onClose={toggleDrawer('left', false)}
						onOpen={toggleDrawer('left', true)}
					>
						<MenuMobileWrapper>{list()}</MenuMobileWrapper>
					</SwipeableDrawer>
				</React.Fragment>
			) : (
				<React.Fragment>
					<MenuWrapper>{list()}</MenuWrapper>
					<Divider orientation="vertical" flexItem />
				</React.Fragment>
			)}
			<ContentWrapper>
				<AppBar position="static" className={classes.colorPrimary}>
					<Toolbar>
						{/* <IconButton */}
						{/* edge="start" */}
						{/* className={classes.menuButton} */}
						{/* color="inherit" */}
						{/* aria-label="open drawer" */}
						{/* > */}
						{/* <MenuIcon /> */}
						{/* </IconButton> */}
						<Typography className={classes.title} variant="h6" noWrap>
							Dashboard
						</Typography>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								value={inputVal}
								onChange={event => setInputVal(event.target.value)}
								inputProps={{ 'aria-label': 'search' }}
							/>
						</div>
						<div className={classes.sectionDesktop}>
							<IconButton
								aria-label="show 17 new notifications"
								color="inherit"
							>
								<Badge color="secondary">
									<NotificationsIcon />
								</Badge>
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
				<Content>
					<CardWrapper>
						{filterCards().map(item => renderCard(item.name, item.type))}
					</CardWrapper>
				</Content>
			</ContentWrapper>
			{window.innerWidth < 800 ? (
				<React.Fragment>
					<EmptyRightIcon onClick={toggleDrawer('right', true)} />
					<SwipeableDrawer
						anchor="right"
						open={state.right}
						onClose={toggleDrawer('right', false)}
						onOpen={toggleDrawer('right', true)}
					>
						<RightPanel />
					</SwipeableDrawer>
				</React.Fragment>
			) : (
				<RightWrapper>
					<RightPanel />
				</RightWrapper>
			)}
		</OutsideWrapper>
	);
}

const OutsideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const MenuWrapper = styled.div`
  width: 10%;
  position: relative;
`;

const MenuMobileWrapper = styled.div`
  width: 300px;
  position: absolute;
  z-index: 100;
`;

const ContentWrapper = styled.div`
  width: 70%;

  @media (max-width: 800px) {
    width: calc(90% - 60px);
  }
`;

const RightWrapper = styled.div`
  width: 20%;
  height: 100vh;
  position: fixed;
  right: 0;
`;

const RightMobileWrapper = styled.div``;

const Content = styled.div``;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  margin-right: 5%;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const EmptyIcon = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid;
  border-radius: 25%;
  background-color: #d8d8d8;
`;

const EmptyRightIcon = styled(EmptyIcon)`
  margin-top: 12px;
`;
const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 10%;
`;

const SecondSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  height: 70%;
`;

const ThirdSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 20%;
`;

const SecondGroupItem = styled(ListItemIcon)`
  cursor: pointer;
  &:hover {
    color: #2196f3;
  }
`;

const FirstGroupItem = styled(ListItemIcon)`
  cursor: pointer;
  &:hover {
    color: #2196f3;
  }
`;

const ThirdGroupItem = styled(ListItemIcon)`
  cursor: pointer;
  &:hover {
    color: #2196f3;
  }
`;

const ListWrapper = styled.div`
  position: fixed;
  left: 0;
  height: 100%;
  width: 10%;
  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    height: 100%;
    width: 20%;
    z-index: 999;
    background: #ffffff;
  }
`;

const MenuIconWrapper = styled.div`
  height: 50px;
  width: 50px;
  margin-left: 10px;
  margin-top: 12px;
`;

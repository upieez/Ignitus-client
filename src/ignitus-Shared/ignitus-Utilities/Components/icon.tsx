import React, {HTMLAttributes} from 'react';
import TwitterIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/twitterIcon/twitterIcon';
import LinkedInIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/linkedInIcon/linkedInIcon';
import AngelListIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/angelListIcon/angelListIcon';
import ChevronIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/chevronIcon/chevronIcon';
import PlusIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/plusIcon/plusIcon';
import ApplyIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/applyIcon/applyIcon';
import HeartIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/heartIcon/heartIcon';
import {AppIcon} from '../../types/iconsTypes/enums';
import MessageIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/messageIcon/messageIcon';
import SaveIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/saveIcon/saveIcon';
import NetworkIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/networkIcon';
import MentorsIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/mentorsIcon/mentorsIcon';

type Props = {
  name: AppIcon;
} & HTMLAttributes<SVGElement>;

const Icon = ({name, ...rest}: Props) => {
  switch (name) {
    case AppIcon.AngelListIcon:
      return <AngelListIcon {...rest} />;

    case AppIcon.ApplyIcon:
      return <ApplyIcon {...rest} />;

    case AppIcon.Chevron:
      return <ChevronIcon {...rest} />;

    case AppIcon.HeartIcon:
      return <HeartIcon {...rest} />;

    case AppIcon.LinkedInIcon:
      return <LinkedInIcon {...rest} />;

    case AppIcon.PlusIcon:
      return <PlusIcon {...rest} />;

    case AppIcon.TwitterIcon:
      return <TwitterIcon {...rest} />;

    case AppIcon.MessageIcon:
      return <MessageIcon {...rest} />;

    case AppIcon.SaveIcon:
      return <SaveIcon {...rest} />;

    case AppIcon.NetworkIcon:
      return <NetworkIcon {...rest} />;

    case AppIcon.MentorsIcon:
      return <MentorsIcon {...rest} />;
  }
};

export default Icon;

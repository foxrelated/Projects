<?php
/**
 * [NULLED BY DARKGOTH 2014]
 */

defined('PHPFOX') or exit('NO DICE!');

/**
 * 
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond_Benc
 * @package 		Phpfox_Component
 * @version 		$Id: index.class.php 1547 2010-04-13 12:13:18Z Raymond_Benc $
 */
class Ad_Component_Controller_Admincp_Placement_Index extends Phpfox_Component
{
	/**
	 * Class process method wnich is used to execute this component.
	 */
	public function process()
	{
		if (($iDelete = $this->request()->getInt('delete')) && Phpfox::getService('ad.process')->deletePlacement($iDelete))
		{
			$this->url()->send('admincp.ad.placement', null, Phpfox::getPhrase('ad.ad_placement_successfully_deleted'));
		}
		
		$this->template()->setTitle(Phpfox::getPhrase('ad.manage_ad_placements'))
			->setBreadcrumb('Modules', '#modules')
			->setBreadcrumb('Advertising', $this->url()->makeUrl('admincp.ad'))
			->setBreadcrumb('Placements', $this->url()->makeUrl('admincp.ad.placement'), true)
			->assign(array(
					'aPlacements' => Phpfox::getService('ad')->getPlacements()
				)
			);		
	}
	
	/**
	 * Garbage collector. Is executed after this class has completed
	 * its job and the template has also been displayed.
	 */
	public function clean()
	{
		(($sPlugin = Phpfox_Plugin::get('ad.component_controller_admincp_placement_index_clean')) ? eval($sPlugin) : false);
	}
}

?>